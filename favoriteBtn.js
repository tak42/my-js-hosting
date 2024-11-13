"use strict";
var btnStyle = [
    { property: 'width', value: '100px' },
    { property: 'height', value: '50px' },
    { property: 'color', value: 'red' },
    { property: 'position', value: 'absolute' },
    { property: 'top', value: '100px' },
    { property: 'left', value: '100px' },
];
var iframeStyle = [
    { property: 'position', value: 'absolute' },
    { property: 'top', value: '50%' },
    { property: 'left', value: '50%' },
    { property: 'transform', value: 'translate(-50%, -50%)' },
];
var setStyle = function (htmlElm, styles) {
    styles.forEach(function (val) {
        htmlElm.style.setProperty(String(val.property), val.value);
    });
};
var setDisplayIframe = function (iframe) {
    document.body.appendChild(iframe);
};
var btn = document.createElement('button');
var iframe = document.createElement('iframe');
btn.innerText = 'iframe 表示';
iframe.src = 'https://localhost:3000/';
setStyle(btn, btnStyle);
setStyle(iframe, iframeStyle);
btn.addEventListener('click', function () { return setDisplayIframe(iframe); });
document.body.appendChild(btn);
