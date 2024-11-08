"use strict";
var btnStyle = [
    { property: 'width', value: '200px' },
    { property: 'height', value: '200px' },
    { property: 'backgroundColor', value: 'transparent' },
];
var alertFunc = function () {
    alert('Hello World!!');
};
var setStyle = function (htmlElm, styles) {
    styles.forEach(function (val) {
        htmlElm.style.setProperty(val.property, val.value);
    });
};
var btn = document.createElement('button');
btn.innerText = 'アラート表示';
setStyle(btn, btnStyle);
btn.addEventListener('click', alertFunc);
document.body.appendChild(btn);
