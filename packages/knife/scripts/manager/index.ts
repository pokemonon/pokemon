import path from 'path';
import { Command } from 'commander';
import { Component, ComponentConstructorOptions, ComponentRenderItemInfo, Module } from '@pokemonon/temanager';
import map from '../../map.json';
import { writeFile } from '../../src/node/file';

const r = (...p: string[]) => path.resolve(__dirname, '../..', ...p);

const program = new Command('manager');

interface ComponentMapItem {
    name: string
}
interface ModuleMapItem {
    type: string
    list: ComponentMapItem[]
}
interface MapItem {
    type: string
    list: ModuleMapItem[]
}

function createManager(map: MapItem[]) {
    const path2map = new Map<string, any>();
    interface ExtraProps {
        info: Record<string, any>
        /**
         * e.g. isType | base | common
         */
        type: 'component' | 'module' | 'group'
        parent?: Component,
        /**
         * component: [group, module]
         * module: [group]
         */
        paths?: Component[]
    }

    function getComponentName(extraProps: ExtraProps) {
        const {
            type,
            info,
            parent,
            paths = []
        } = extraProps;
        if (type === 'component') {
            return getModuleKey([...paths.map(i => i.extraProps.info.type), info.name]);
        } else if (type === 'module') {
            return getModuleKey([parent!.extraProps.info.type, info.type]);
        } else {
            return getModuleKey([info.type]);
        }
    }

    const module = new Module({
        resolveComponentOptions(opts) {
            const extraProps = opts.extraProps as ExtraProps;
            const {
                type,
                info,
                parent,
                paths = []
            } = extraProps as ExtraProps;

            let renderList: ComponentRenderItemInfo[] = [];
            switch(type) {
                case 'component':
                    renderList = [
                        {
                            file: r('src', ...paths.map(i => i.extraProps.info.type), `${info.name}.ts`),
                            template: r('scripts/manager/tpls/component/entry.ejs'),
                            renderData: {
                                name: info.name
                            }
                        },
                        {
                            file: r('tests', ...paths.map(i => i.extraProps.info.type), `${info.name}.test.ts`),
                            template: r('scripts/manager/tpls/component/test.ejs'),
                            renderData: {
                                name: info.name
                            }
                        },
                    ];
                    break;
                case 'module':
                    renderList = [
                        {
                            file: r('src', parent!.extraProps.info.type, info.type, 'index.ts'),
                            template: r('scripts/manager/tpls/component/module-entry.ejs'),
                            replace: true,
                            renderData() {
                                return {
                                    moduleFunctions: extraProps!.info.list.map(i => i.name)
                                };
                            }
                        }
                    ];
                    break;
                case 'group':
                    renderList = [
                        {
                            file: r('src', info.type, 'index.ts'),
                            template: r('scripts/manager/tpls/component/group-entry.ejs'),
                            replace: true,
                            renderData() {
                                return {
                                    modules: extraProps!.info.list.map(i => i.type)
                                };
                            }
                        }
                    ];
                    break;
                default:
                    break;
            }

            return {
                ...opts,
                name: getComponentName(extraProps),
                renderList,
            };
        },
    });

    for (const group of map) {
        path2map.set(group.type, group);
        const groupComponent = module.addComponent({
            extraProps: {
                info: group,
                type: 'group',
            }
        });
        for (const groupItem of group.list) {
            path2map.set(getModuleKey([group.type, groupItem.type]), groupItem);
            const groupItemComponent = module.addComponent({
                extraProps: {
                    info: groupItem,
                    type: 'module',
                    parent: groupComponent,
                    paths: [groupComponent]
                }
            });
            for (const item of groupItem.list) {
                path2map.set(getModuleKey([group.type, groupItem.type, item.name]), item);
                module.addComponent({
                    extraProps: {
                        info: item,
                        type: 'component',
                        parent: groupItemComponent,
                        paths: [groupComponent, groupItemComponent]
                    }
                });
            }
        }
    }


    function getModuleKey(p: string[]) {
        return p.join('.');
    }

    function updateMap() {
        writeFile(r('map.json'), JSON.stringify(map, null, 2));
    }

    /**
     * 
     * @param p 
     * @param opts 
     */
    function addComponent(opts: Partial<ComponentConstructorOptions>) {
        const extraProps = {
            type: 'component',
            ...opts.extraProps
        } as ExtraProps;
        const {
            info,
            parent,
            paths = []
        } = extraProps;
        const name = getComponentName(extraProps);
        let component = module.getComponent(name);
        if (!component) {
            component = module.addAndRenderComponent({
                ...opts,
                extraProps
            });
            parent!.extraProps.info.list.push(info);
        }


        paths.forEach(i => i.render());
        updateMap();
    }

    function removeComponent(name) {
        const component = module.removeComponent(name);
        const {
            parent,
            info,
            paths = []
        } = component.extraProps as ExtraProps;
        const idx = parent!.extraProps.info.list.findIndex(i => i === info);
        if (idx > -1) {
            parent!.extraProps.info.list.splice(idx, 1);
            paths.forEach(i => i.render());
            updateMap();
        }
    }

    return {
        module,
        addComponent,
        removeComponent,
    };
}

const manager = createManager(map);

/**
 * create new function
 */
program.command('create')
    .option('-g, --group <name>', 'common | browser | node')
    .option('-m, --module <name>')
    .argument('<name>')
    .action((functionName, options) => {
        if (!functionName || !options.group || !options.module) {
            throw new Error('miss params');
        }
        const parentCommon = manager.module.getComponent('common');
        const parentArray = manager.module.getComponent('common.array');

        if (!parentCommon || !parentArray) {
            throw new Error('parent not exist');
        }

        manager.addComponent({
            extraProps: {
                info: {
                    name: 'test',
                },
                parent: parentArray,
                paths: [
                    parentCommon,
                    parentArray
                ]
            }
        });

    });

/**
 * remove new function
 */
program.command('remove')
    .option('-g, --group <name>', 'common | browser | node')
    .option('-m, --module <name>')
    .argument('<name>')
    .action((functionName, options) => {
        if (!functionName || !options.group || !options.module) {
            console.log('miss params');
            return;
        }
        manager.removeComponent('common.array.test');
    });

program.parse();
