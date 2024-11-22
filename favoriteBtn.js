"use strict";
var btnStyle = [
    { property: 'width', value: '100px' },
    { property: 'height', value: '50px' },
    { property: 'color', value: 'red' },
    { property: 'position', value: 'absolute' },
    { property: 'top', value: '100px' },
    { property: 'left', value: '100px' },
];
var containerStyle = [
    { property: 'height', value: '800px' },
    { property: 'width', value: '600px' },
    { property: 'position', value: 'absolute' },
    { property: 'top', value: '50%' },
    { property: 'left', value: '50%' },
    { property: 'transform', value: 'translate(-50%, -50%)' },
];
var iframeStyle = [
    { property: 'height', value: '100%' },
    { property: 'width', value: '100%' },
];
var setStyle = function (htmlElm, styles) {
    styles.forEach(function (val) {
        htmlElm.style.setProperty(String(val.property), val.value);
    });
};
var showIframe = function () {
    var container = document.getElementById(containerId);
    if (!container || container.querySelector('iframe'))
        return false;
    var iframe = document.createElement('iframe');
    btn.innerText = 'iframe 表示';
    iframe.src = 'http://localhost:3000/';
    iframe.sandbox.value = 'allow-scripts allow-same-origin';
    setStyle(iframe, iframeStyle);
    container.appendChild(iframe);
};
var hideIframe = function () {
    var container = document.getElementById('iframeContainer');
    if (!container)
        return console.log('container not exist');
    console.log('container exist');
    var iframe = container.querySelector('iframe');
    if (!iframe)
        return false;
    container.removeChild(iframe);
};
window.addEventListener('message', function (event) {
    if (event.origin !== 'http://localhost')
        return false;
    if (event.data === 'close')
        hideIframe();
});
var btn = document.createElement('button');
var containerId = 'iframeContainer';
var container = document.createElement('div');
container.id = containerId;
setStyle(btn, btnStyle);
setStyle(container, containerStyle);
btn.addEventListener('click', showIframe);
document.body.appendChild(btn);
document.body.appendChild(container);
