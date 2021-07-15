import isString from '../base/isString';
import noop from '../function/noop';
import onceFn from '../function/once';
import { Fn } from 'packages/knife/types/common';
import Emitter from './Emitter';
import browserLogger from '../../browser/log/logger';
import { isArray } from '../base';

const ID_PREFIX = 'POKEMON_EVENTTOP_ID';
let count = 0;
function genId() {
    return `${ID_PREFIX}_${count++}`;
}
function checkIfId(id: string) {
    return isString(id) && id.startsWith(ID_PREFIX);
}

type OnAdapterCb<Evt> = (eventName: string, evt: Evt, data: any[]) => void;
type OnAdapter<Evt> = (cb: OnAdapterCb<Evt>) => any;
type EmitAdapterInfo<Evt> = {
    emitTarget?: any;
    evt?: Evt,
    eventName: string;
    data: any[]
}
type EmitAdapter<Evt> = (info: EmitAdapterInfo<Evt>) => void
interface EventToPOpts<Evt> {
    onAdapter: OnAdapter<Evt>;
    emitAdapter: EmitAdapter<Evt>;
    logger?: typeof browserLogger
}

export interface extendedPromise<T, U = any> extends Promise<T> {
    every: (cb: (target: U, data: T) => void) => extendedPromise<T>
}

/**
 * 
 * @category Utils
 * @param opts 
 * @returns 
 */
function eventToP<Evt = any>(opts: EventToPOpts<Evt>) {
    const {
        onAdapter,
        emitAdapter,
        logger = browserLogger
    } = opts;

    const RESOLVE_EVENT = 'RESOLVE_EVENT';
    const emitter = new Emitter();
    const resolves = new Map();

    // let currentEvt;

    // 监听完成事件
    emitter.on(RESOLVE_EVENT, (_evt, id, data) => {
        const item = resolves.get(id); 
        if (!item) {
            logger.warn('no is exist');
            return;
        }
        resolves.delete(id);
        const { resolve } = item;
        resolve(data);
    });

    type Resolve = Fn
    type Listener<T extends any[] = any[]> = (evt: Evt, ...args: [...T, Resolve]) => any
    const on = (eventName: string, listener: Listener) => {
        const callback = (evt: Evt, ...args) => {
            let resolve: Fn = noop;
            const firstArg = args[0];
            if (checkIfId(firstArg)) {
                // 取出id
                args.shift(); 
                resolve = (data) => {
                    const info = {
                        // emitTarget
                        eventName: RESOLVE_EVENT,
                        data: [firstArg, data],
                        evt
                    };
                    emitAdapter(info);
                };
            }

            listener(evt, ...args, resolve);
        };
        emitter.on(eventName, callback);
        return () => {
            emitter.off(eventName, callback);
        };
    };

    function emit<T = any>(eventName: string, ...args: any[]): extendedPromise<T>
    function emit<T = any, U = any>(target: U | U[], eventName: string, ...args: any[]): extendedPromise<T>
    function emit<T = any, U = any>(target: U | U[], eventName: string, ...args: any[]): extendedPromise<T> {
        if (isString(target)) {
            args.unshift(eventName);
            eventName = target;
            target = null;
        }

        function send(target: U, args: any) {
            return new Promise((resolve, reject) => {
                const id = genId();
                // 每次完成触发一次every的回调
                const res = (data) => {
                    eventCallback(target, data);
                    resolve(data);
                };
                resolves.set(id, { resolve: res, reject });
            
                const info = {
                    emitTarget: target,
                    eventName,
                    // 在数据头中插入id，监听处取出
                    data: [id, ...args]
                };

                emitAdapter(info);
            });
        }

        let p: extendedPromise<T, U>;
        if (isArray<U[]>(target)) {
            // const allTarget = isArray(target) ? target : [target];
            p = Promise.all(target.map(item => send(item, args))) as any;

        } else {
            p = send(target, args) as any;
        }
        let eventCallback: Fn = noop;
        p.every = (cb) => {
            eventCallback = cb;
            return p;
        };

        return p as extendedPromise<T>;
    }

    function once(eventName: string, listener: Listener) {
        return on(eventName, onceFn(listener));
    }

    function off(eventName: string, listener: Fn) {
        emitter.off(eventName, listener);
    }

    function removeAllListeners(eventName?: string) {
        emitter.removeAllListeners(eventName);
    }


    // 全局监听事件
    const close = onAdapter((eventName, evt, args = []) => {
        // 设置当前evt
        // currentEvt = evt;
        emitter.emit(eventName, evt, ...args);
    });

    return {
        on,
        emit,
        once,
        off,
        removeAllListeners,
        close
    };
}

export default eventToP;
