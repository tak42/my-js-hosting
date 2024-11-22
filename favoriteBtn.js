"use strict";
var localhostUrl = 'http://localhost:3000/';
var containerId = 'iframeContainer';
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
var showIframe = function (url) {
    var container = document.getElementById(containerId);
    var iframe = document.createElement('iframe');
    btn.innerText = 'iframe 表示';
    iframe.src = url;
    iframe.sandbox.value = 'allow-scripts allow-same-origin';
    setStyle(iframe, iframeStyle);
    container === null || container === void 0 ? void 0 : container.appendChild(iframe);
};
var hideIframe = function () {
    var container = document.getElementById(containerId);
    var iframe = container === null || container === void 0 ? void 0 : container.querySelector('iframe');
    if (iframe)
        container === null || container === void 0 ? void 0 : container.removeChild(iframe);
};
window.addEventListener('message', function (event) {
    console.log("message:".concat(event));
    if (event.origin !== localhostUrl)
        return false;
    var eventSwitcObj = [
        {
            data: 'getOrigin',
            procFunc: function () {
                var _a;
                console.log('postMsg');
                (_a = event.source) === null || _a === void 0 ? void 0 : _a.postMessage(window.location.origin, { targetOrigin: event.origin });
            },
        },
        { data: 'close', procFunc: hideIframe },
    ];
    eventSwitcObj[event.data].procFunc();
});
var btn = document.createElement('button');
var container = document.createElement('div');
container.id = containerId;
setStyle(btn, btnStyle);
setStyle(container, containerStyle);
btn.addEventListener('click', function () { return showIframe(localhostUrl); });
document.body.appendChild(btn);
document.body.appendChild(container);
