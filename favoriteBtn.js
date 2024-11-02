"use strict";
// type StyleProperty = 'height' | 'width' | 'color' | 'background-color';
// type Style = { [key in StyleProperty]: string };
var createBtn = function () {
    return document.createElement('button');
};
var alertFunc = function () {
    alert('Hello World!!');
};
// const btnStyle: Style = {
//   height: '50px',
//   width: '100px',
//   color: 'white',
//   'background-color': 'red',
// };
// const setBtnStyle = (btnElm: HTMLButtonElement, style: Style) => {
//   Object.entries(style).forEach(([key, val]) => {
//     btnElm.style.setProperty(key, val);
//   });
// };
function setBtnStyle(property, value, btnElm) {
    btnElm.style[property] = value;
}
var setBtnInnerText = function (btnElm, txt) {
    btnElm.innerText = txt;
};
var alertBtn = createBtn();
setBtnInnerText(alertBtn, 'アラート表示3');
setBtnStyle('height', '50px', alertBtn);
setBtnStyle('width', '100px', alertBtn);
setBtnStyle('color', 'white', alertBtn);
setBtnStyle('backgroundColor', 'red', alertBtn);
// setBtnStyle(alertBtn, btnStyle);
alertBtn.addEventListener('click', alertFunc);
document.body.appendChild(alertBtn);
