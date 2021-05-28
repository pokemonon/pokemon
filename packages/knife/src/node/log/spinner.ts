/**
 * todo spinner list
 */
import Listr from 'listr';
import SpinnerRenderer from './_spinner-renderer';
// import ListrUpdateRenderer from 'listr-update-renderer';

// type ListrTaskObject<Ctx> = Listr.ListrTaskObject<Ctx>
// class CustomRender<Ctx> extends ListrUpdateRenderer {
//     _tasks: ReadonlyArray<ListrTaskObject<Ctx>>
//     _id: number
//     _doneTasks = new Set()
//     render() {
//         super.render()
//         for (const task of this._tasks) {
//             task.subscribe(e => {
//                 if (task.isCompleted() || task.hasFailed()) {
//                     this._doneTasks.add(task)
//                     if (this._doneTasks.size === this._tasks.length) {
//                         // 确保updaterenderer内部的定时器完成
//                         setTimeout(() => {
//                             clearInterval(this._id)
//                         }, 100)
//                     }
//                 }
//             })
//         }
//     }
//     end() {
//         // 这个只会执行一次，内部停止定时器 导致定制后面task的绘画
//     }
// }
const listr = new Listr({
    concurrent: true,
    renderer: SpinnerRenderer as any
});

interface SpinnerOp {
    resolve: (value?: any) => void;
    reject: (reason?: any) => void;
}
class Spinner {
    #op!: SpinnerOp

    constructor(text: string) {
        listr.add({
            title: text,
            task: () => {
                return new Promise((resolve, reject) => {
                    this.#op = {
                        resolve,
                        reject
                    };
                });
            }
        });
    }

    start() {
        listr.run().catch(() => {});
    }

    success() {
        this.#op.resolve();
    }

    fail(reason?: string) {
        this.#op.reject(new Error(reason));
    }
}

export default Spinner;

// const spinner = new Spinner('hello')
// spinner.start()

// setTimeout(() => {
//     spinner.success()
//     // console.log(1111)
//     setTimeout(() => {
//         console.log(1211)
//     })
// }, 1000)

// const spinner2 = new Spinner('name')
// spinner2.start()
// setTimeout(() => {
//     spinner2.fail()
//     console.log(1)
// }, 2000)

// const spinner3 = new Spinner('city')
// spinner3.start()
// setTimeout(() => {
//     spinner3.fail()
// }, 4000)