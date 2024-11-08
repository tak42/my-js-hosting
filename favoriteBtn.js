"use strict";
var btnStyle = [
    { property: 'width', value: '100px' },
    { property: 'height', value: '50px' },
    { property: 'color', value: 'red' },
];
var iframeStyle = [{ property: 'border', value: 'none' }];
var divStyle = [
    { property: 'height', value: '100vh' },
    { property: 'display', value: 'flex' },
    { property: 'justifyContent', value: 'center' },
    { property: 'alignItems', value: 'center' },
];
var setStyle = function (htmlElm, styles) {
    styles.forEach(function (val) {
        htmlElm.style.setProperty(String(val.property), val.value);
    });
};
var setDisplayIframe = function (child) {
    document.body.appendChild(child);
};
var btn = document.createElement('button');
var div = document.createElement('div');
var iframe = document.createElement('iframe');
btn.innerText = 'iframe 表示';
iframe.src = 'https://www.mouse-jp.co.jp/';
setStyle(btn, btnStyle);
setStyle(div, divStyle);
setStyle(iframe, iframeStyle);
btn.addEventListener('click', function () { return setDisplayIframe(div); });
div.appendChild(iframe);
document.body.appendChild(btn);
