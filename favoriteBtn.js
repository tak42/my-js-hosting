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
    backgroundColor: 'gray',
};
var setBtnStyle = function (bthElm, style) {
    Object.keys(style).forEach(function (key) {
        bthElm.style.setProperty(key, style[key]);
    });
};
var alertBtn = createBtn();
setBtnStyle(alertBtn, btnStyle);
alertBtn.addEventListener('click', alertFunc);
document.body.appendChild(alertBtn);
