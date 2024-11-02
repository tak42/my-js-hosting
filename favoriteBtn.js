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
    color: 'white',
    'background-color': 'red',
};
var setBtnStyle = function (btnElm, style) {
    Object.entries(style).forEach(function (_a) {
        var key = _a[0], val = _a[1];
        btnElm.style.setProperty(key, val);
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
