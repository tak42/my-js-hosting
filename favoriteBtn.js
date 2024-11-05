"use strict";
var createBtn = function () {
    return document.createElement('button');
};
var createIframe = function () {
    return document.createElement('iframe');
};
var setStyle = function (property, value, elm) {
    elm.style[property] = value;
};
var setBtnInnerText = function (btnElm, txt) {
    btnElm.innerText = txt;
};
var setIframeSoc = function (ifElm, url) {
    ifElm.src = url;
};
var displayIframe = function () {
    var iframe = createIframe();
    setStyle('height', '200px', iframe);
    setStyle('width', '300px', iframe);
    setIframeSoc(iframe, 'https://web.vsmobile.jp/exvs2ob/login');
    document.body.appendChild(iframe);
};
var alertBtn = createBtn();
setBtnInnerText(alertBtn, 'iframe表示');
setStyle('height', '50px', alertBtn);
setStyle('width', '100px', alertBtn);
setStyle('color', 'white', alertBtn);
setStyle('backgroundColor', 'red', alertBtn);
alertBtn.addEventListener('click', displayIframe);
document.body.appendChild(alertBtn);
