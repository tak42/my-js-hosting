"use strict";
var localhostUrl = 'http://localhost:3000';
// const uuid = crypto.randomUUID();
// const containerId = `feasy_iframeContainer_${uuid}`;
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
    // const container = document.getElementById(containerId);
    var iframe = document.createElement('iframe');
    iframe.src = localhostUrl;
    iframe.sandbox.value = 'allow-scripts allow-same-origin';
    setStyle(iframe, iframeStyle);
    container.appendChild(iframe);
};
var hideIframe = function () {
    // const container = document.getElementById(containerId);
    var iframe = container.querySelector('iframe');
    if (iframe)
        container.removeChild(iframe);
};
window.addEventListener('message', function (event) {
    if (event.origin === localhostUrl)
        hideIframe();
});
var btn = document.createElement('button');
var container = document.createElement('div');
btn.innerText = 'iframe 表示';
// container.id = containerId;
setStyle(btn, btnStyle);
setStyle(container, containerStyle);
btn.addEventListener('click', showIframe);
document.body.appendChild(btn);
document.body.appendChild(container);
