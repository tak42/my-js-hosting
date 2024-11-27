"use strict";
var LOCALHOST_URL = 'http://localhost:3000';
var btnStyle = [
    { property: 'width', value: '150px' },
    { property: 'height', value: '50px' },
    { property: 'color', value: 'red' },
    { property: 'position', value: 'absolute' },
    { property: 'top', value: '20%' },
    { property: 'left', value: '100px' },
];
var containerStyle = [
    { property: 'height', value: '800px' },
    { property: 'width', value: '600px' },
    { property: 'position', value: 'absolute' },
    { property: 'top', value: '50%' },
    { property: 'left', value: '50%' },
    { property: 'transform', value: 'translate(-50%, -50%)' },
    { property: 'backgroundColor', value: 'white' },
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
    var iframe = document.createElement('iframe');
    iframe.src = LOCALHOST_URL;
    iframe.sandbox.value = 'allow-scripts allow-same-origin';
    setStyle(iframe, iframeStyle);
    container.appendChild(iframe);
};
var hideIframe = function () {
    var iframe = container.querySelector('iframe');
    if (iframe)
        container.removeChild(iframe);
};
var shareForm = function (data) {
    var nameInput = document.getElementById('q1');
    if (!nameInput)
        console.log("don't get q1");
    console.log(data);
};
var iframePostActions = [
    { action: 'hide', func: hideIframe },
    { action: 'share', func: shareForm },
];
window.addEventListener('message', function (event) {
    var actionFunc = iframePostActions.filter(function (val) { return val.action === event.data.action; });
    if (event.origin !== LOCALHOST_URL)
        return console.log('not localhost');
    actionFunc[0].func(event.data.content);
});
var btn = document.createElement('button');
var container = document.createElement('div');
btn.innerText = 'iframe 表示';
setStyle(btn, btnStyle);
setStyle(container, containerStyle);
btn.addEventListener('click', showIframe);
document.body.appendChild(btn);
document.body.appendChild(container);
