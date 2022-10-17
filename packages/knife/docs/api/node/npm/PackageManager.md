# PackageManager
```ts
import execa from 'execa';
import { ItemOrArray } from '../../types';
declare const PACKAGE_MANAGER_CONFIG: {
    yarn: {
        install: never[];
        add: string[];
        upgrade: string[];
        remove: string[];
    };
    pnpm: {
        install: string[];
        add: string[];
        upgrade: string[];
        remove: string[];
    };
    npm: {
        install: string[];
        add: string[];
        upgrade: string[];
        remove: string[];
    };
};
declare type PackageManagerCommand = keyof typeof PACKAGE_MANAGER_CONFIG.yarn;
declare enum PackageManagerEnum {
    yarn = "yarn",
    pnpm = "pnpm",
    npm = "npm"
}
interface PackageManagerConfig {
    context?: string;
    forcePackageManager?: PackageManagerEnum;
}
export declare class PackageManager {
    bin: PackageManagerEnum;
    context: string;
    constructor(config: PackageManagerConfig);
    runCommand(command: PackageManagerCommand, args?: any[]): Promise<execa.ExecaReturnValue<string>>;
    install(): Promise<execa.ExecaReturnValue<string>>;
    add(pkgNames: ItemOrArray<string>, args?: never[]): Promise<execa.ExecaReturnValue<string>>;
    upgrade(pkgNames: ItemOrArray<string>): Promise<execa.ExecaReturnValue<string>>;
    remove(pkgNames: ItemOrArray<string>): Promise<execa.ExecaReturnValue<string>>;
}
export {};

```
