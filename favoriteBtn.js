"use strict";
var btnStyle = [
    { property: 'width', value: '100px' },
    { property: 'height', value: '50px' },
    { property: 'color', value: 'red' },
];
var alertFunc = function () {
    alert('Hello World!!');
};
var setStyle = function (htmlElm, styles) {
    styles.forEach(function (val) {
        htmlElm.style.setProperty(String(val.property), val.value);
    });
};
var btn = document.createElement('button');
btn.innerText = 'アラート表示';
setStyle(btn, btnStyle);
btn.addEventListener('click', alertFunc);
document.body.appendChild(btn);
