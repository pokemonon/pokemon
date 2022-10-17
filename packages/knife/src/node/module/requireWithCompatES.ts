/**
 * require 兼容es 统一default字段
 * @category Module
 */
export function requireWithCompatES(mod) {
    return mod && mod.__esModule ? mod : { __esModule: false, default: mod };
}

