"use strict";
var createBtn = function () {
    return document.createElement('button');
};
var alertFunc = function () {
    alert('Hello World!!');
};
var btnStyle = {
    height: '50px',
    width: '100px',
    backgroundColor: 'red',
};
var setBtnStyle = function (btnElm, style) {
    Object.keys(style).forEach(function (key) {
        btnElm.style.setProperty(key, style[key]);
    });
};
var setBtnInnerText = function (btnElm, txt) {
    btnElm.innerText = txt;
};
var alertBtn = createBtn();
setBtnInnerText(alertBtn, 'アラート表示');
setBtnStyle(alertBtn, btnStyle);
alertBtn.addEventListener('click', alertFunc);
document.body.appendChild(alertBtn);
