'use strict';
var createBtn = function () {
  return document.createElement('button');
};
var alertFunc = function () {
  alert('Hello World!!');
};
var setBtnStyle = function (property, value, btnElm) {
  btnElm.style[property] = value;
};
var setBtnInnerText = function (btnElm, txt) {
  btnElm.innerText = txt;
};
var alertBtn = createBtn();
setBtnInnerText(alertBtn, 'アラート表示');
setBtnStyle('height', '50px', alertBtn);
setBtnStyle('width', '100px', alertBtn);
setBtnStyle('color', 'white', alertBtn);
setBtnStyle('backgroundColor', 'red', alertBtn);
alertBtn.addEventListener('click', alertFunc);
document.body.appendChild(alertBtn);
