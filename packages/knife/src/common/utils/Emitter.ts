import { Fn } from '../../../types/common';
import once from '../function/once';

/**
 * 事件触发器
 * @class
 */
class Emitter {
    #events: Record<string, Fn[]> = {};

    /**
     * 监听事件
     * @param event 
     * @param listener 
     * @returns 
     */
    on<T extends Fn>(event: string, listener: T) {
        this.#events[event] = this.#events[event] || [];
        this.#events[event].push(listener);
        return this;
    }

    /**
     * 监听事件 回调函数只会触发一次
     * @param event 
     * @param listener 
     * @returns 
     */
    once<T extends Fn>(event: string, listener: T) {
        this.on(event, once(listener));
        return this;
    }

    /**
     * 触发事件
     * @param event 
     * @param args 
     * @returns 
     */
    emit(event: string, ...args) {
        const fns = this.#events[event];

        if (!fns) return false;

        fns.forEach(fn => fn.apply(this, args));
        return this;
    }

    /**
     * 取消指定回调的事件监听
     * @param event 
     * @param listener 
     * @returns 
     */
    off<T extends Fn>(event: string, listener: T) {
        const fns = this.#events[event];

        if (!fns) return false;

        const idx = fns.indexOf(listener);
        if (idx > -1) {
            fns.splice(idx, 1);
        }

        return this;
    }

    /**
     * 取消事件的监听
     * @param event 不传则取消所有事件的监听
     * @returns 
     */
    removeAllListeners(event?: string) {
        if (!event) {
            this.#events = {};
        } else {
            delete this.#events[event];
        }

        return this;
    }
}

export default Emitter;
