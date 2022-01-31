
const createLog = (...styles: string[]) => {
    /**
     * @param {string[]} formats format: idx_placeholder
     */
    return (...formats: string[]) => {
        return (...args: string[]) => {
            const sorted = formats.map(format => {
                const [idx, placeholder] = format.split('_');
                return args[+idx - 1] || placeholder;
            });
            console.log(`%c${sorted.join('%c')}`, ...styles);
        };
    };
};
 
const info = createLog('background:blue;color:black;margin-right: 1em;', '')('2_ INFO ', '1');
const warn = createLog('background:yellow;color:black;margin-right:1em;', '')('2_ WARN ', '1');
const error = createLog('background:red;color:black;margin-right:1em', '')('2_ ERROR ', '1'); 

export default {
    createLog,
    info,
    warn,
    error,
};
