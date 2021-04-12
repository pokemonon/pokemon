/**
 * 防抖
 * @category Utils
 * @param delay 延迟时间
 * @param fn 回调函数
 */
const debounce = (fn, delay: number) => {
    let timer;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    };
};

export default debounce;