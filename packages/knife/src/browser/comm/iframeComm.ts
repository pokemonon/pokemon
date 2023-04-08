import { eventToP } from '../../common/utils/eventToP'

interface IframeCommOpts {
  defaultTarget: any
  defaultOrigin: string
}
/**
 * 简化iframe间通信api
 * @category Comm
 */
export const iframeComm = ({
  defaultTarget,
  defaultOrigin = '*',
} = {} as IframeCommOpts) => {
  return eventToP<MessageEvent>({
    onAdapter(cb) {
      const callback = (e) => {
        const msgData = e.data
        const { eventName, data } = msgData
        cb(eventName, e, data)
      }
      window.addEventListener('message', callback)
      return () => {
        window.removeEventListener('message', callback)
      }
    },
    emitAdapter(info) {
      const { emitTarget, evt = {} as MessageEvent, data, eventName } = info
      const target = emitTarget || evt.source || defaultTarget
      if (!target) {
        throw new Error('not exist target')
      }
      if (!eventName) {
        return
      }
      const { origin } = evt
      // const allT: Window[] = isArray<Window[]>(target) ? target : [target];
      // allT.forEach(t => t.postMessage({ eventName, data }, origin || defaultOrigin));
      target.postMessage({ eventName, data }, origin || defaultOrigin)
    },
  })
}

/**
 * @examples
 */
// ----------  main frame  -------------
// const iframeWindow1 = iframe1.contentWindow;
// const iframeWindow2 = iframe2.contentWindow;
// const {
//     on,
//     emit,
//     once,
//     close
// } = iframeComm();
// Promise.all([
//     new Promise(resolve => iframe1.addEventListener('load', resolve)),
//     new Promise(resolve => iframe2.addEventListener('load', resolve))
// ]).then(() => {
//     emit([iframeWindow1, iframeWindow2], 'connect', 'i am main')
//         当有多个iframe是，每个事件完成都会触发一次every的回调
//         .every((target, data) => {
//             console.log(typeof target, data);
//         })
//         所有iframe的事件完成后触发
//         .then(res => {
//             console.log('receive connect msg in main:', res);
//         });
// });

// ------------ frame1 ------------
// const { emit, on } = iframeComm({
//     defaultTarget: window.parent
// });

// on('connect', (evt, msg, resolve) => {
//     console.log('connect msg in iframe: ', msg)
//     resolve('resolve of iframe')
// }
