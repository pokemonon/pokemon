// ! 因为是操作同一个body，所以多个可能会相互影响
// const preventBack = (flag) => {
//     if (flag) {
//         const top = document.documentElement.scrollTop || document.body.scrollTop;
//         document.body.style.cssText += `
//             position: fixed;
//             width: 100vw;
//             left: 0;
//             top: ${-top}px;
//         `;
//     } else {
//         const top = document.body.style.top;
//         document.body.style.cssText += `
//             position: static;
//         `;
//         window.scrollTo(0, Math.abs(parseFloat(top)));
//     }
// };
// ! touchmove preventDefault


// todo
export const prevetBack = () => {
    //
};
