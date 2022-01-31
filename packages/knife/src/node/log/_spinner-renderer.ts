import logUpdate from 'log-update'
import chalk from 'chalk'
import figures from 'figures'
import indentString from 'indent-string'
import cliTruncate from 'cli-truncate'
// import stripAnsi from 'strip-ansi'
import logSymbols from 'log-symbols'
import elegantSpinner from 'elegant-spinner'
import isDef from '../../common/base/isDef'
import { ListrOptions, ListrTaskObject } from 'listr'

const pointer = chalk.yellow(figures.pointer);
const skipped = chalk.yellow(figures.arrowDown);

const getSymbol = (task, options) => {
	if (!task.spinner) {
		task.spinner = elegantSpinner();
	}

	if (task.isPending()) {
		return options.showSubtasks !== false && task.subtasks.length > 0 ? pointer : chalk.yellow(task.spinner());
	}

	if (task.isCompleted()) {
		return logSymbols.success;
	}

	if (task.hasFailed()) {
		return task.subtasks.length > 0 ? pointer : logSymbols.error;
	}

	if (task.isSkipped()) {
		return skipped;
	}

	return ' ';
};

const renderHelper = (tasks: Array<ListrTaskObject<any>>, options, level?) => {
	level = level || 0;

	let output = [];

	for (const task of tasks) {
		if (task.isEnabled()) {
			const skipped = task.isSkipped() ? ` ${chalk.dim('[skipped]')}` : '';

			output.push(indentString(` ${getSymbol(task, options)} ${task.title}${skipped}`, level, '  '));

			if ((task.isPending() || task.isSkipped() || task.hasFailed()) && isDef(task.output)) {
				let data = task.output;

				if (typeof data === 'string') {
					// data = stripAnsi(data.trim().split('\n').filter(Boolean).pop());

					if (data === '') {
						data = undefined;
					}
				}

				if (isDef(data)) {
					const out = indentString(`${figures.arrowRight} ${data}`, level, '  ');
					output.push(`   ${chalk.gray(cliTruncate(out, process.stdout.columns - 3))}`);
				}
			}

			if ((task.isPending() || task.hasFailed() || options.collapse === false) && (task.hasFailed() || options.showSubtasks !== false) && task.subtasks.length > 0) {
				output = output.concat(renderHelper(task.subtasks as any, options, level + 1));
			}
		}
	}

	return output.join('\n');
};

const render = (tasks, options) => {
	logUpdate(renderHelper(tasks, options));
};

interface SpinnerRendererOptions extends ListrOptions {
    showSubtasks: boolean;
    collapse: boolean;
    clearOutput: boolean;
}
class SpinnerRenderer<Ctx> {
    _id: NodeJS.Timeout
    _tasks: Array<ListrTaskObject<Ctx>>
    _options: SpinnerRendererOptions
    _doneTasks = new Set()
	constructor(tasks, options) {
		this._tasks = tasks;
		this._options = Object.assign({
			showSubtasks: true,
			collapse: true,
			clearOutput: false
		}, options);
	}

	render() {
		if (this._id) {
			// Do not render if we are already rendering
			return;
		}

		this._id = setInterval(() => {
			render(this._tasks, this._options);
            for (const task of this._tasks) {
                task.subscribe(e => {
                    if (task.isCompleted() || task.hasFailed()) {
                        this._doneTasks.add(task)
                        if (this._doneTasks.size === this._tasks.length) {
                            clearInterval(this._id)
                            render(this._tasks, this._options)
                        }
                    }
                })
            }
		}, 100);
	}

	end(err) {
		// if (this._id) {
		// 	clearInterval(this._id);
		// 	this._id = undefined;
		// }

		// render(this._tasks, this._options);

		// if (this._options.clearOutput && err === undefined) {
		// 	logUpdate.clear();
		// } else {
		// 	logUpdate.done();
		// }
	}
}

export default SpinnerRenderer