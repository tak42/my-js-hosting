var LOCALHOST_URL = 'http://localhost:3000';
var btnStyle = [
    { property: 'width', value: '160px' },
    { property: 'height', value: '56px' },
    { property: 'color', value: 'red' },
    { property: 'position', value: 'absolute' },
    { property: 'top', value: '160px' },
    { property: 'left', value: '80px' },
];
var containerStyle = [
    { property: 'height', value: '50%' },
    { property: 'width', value: '50%' },
    { property: 'position', value: 'absolute' },
    { property: 'top', value: '50%' },
    { property: 'left', value: '50%' },
    { property: 'transform', value: 'translate(-50%, -50%)' },
];
var containerHideStyle = [
    { property: 'height', value: '0' },
    { property: 'width', value: '0' },
];
var iframeStyle = [
    { property: 'height', value: '100%' },
    { property: 'width', value: '100%' },
    { property: 'background', value: 'white' },
];
var setStyle = function (htmlElm, styles) {
    styles.forEach(function (val) {
        htmlElm.style.setProperty(String(val.property), val.value);
    });
};
var showIframe = function () {
    setStyle(container, containerStyle);
    if (container.querySelector('iframe'))
        return;
    var iframe = document.createElement('iframe');
    iframe.src = LOCALHOST_URL;
    iframe.sandbox.value = 'allow-scripts allow-same-origin allow-modals';
    setStyle(iframe, iframeStyle);
    container.appendChild(iframe);
};
var hideIframe = function () {
    setStyle(container, containerHideStyle);
};
var shareForm = function (event) {
    console.log(event);
    var postData = event.data;
    var inputElms = Array.from(document.getElementsByTagName('input'));
    postData.content.forEach(function (val) {
        var elm = inputElms.find(function (_a) {
            var id = _a.id;
            return id === val.id;
        });
        if (!elm)
            return;
        elm.value = val.value;
    });
    hideIframe();
};
var originCheck = function (event) {
    if (!event.source)
        return;
    event.source.postMessage(window.location.origin, event.origin);
};
var iframePostActions = {
    hide: hideIframe,
    share: shareForm,
    check: originCheck,
};
window.addEventListener('message', function (event) {
    var postData = event.data;
    iframePostActions[postData.action](event);
});
var btn = document.createElement('button');
var container = document.createElement('div');
btn.innerText = 'iframe 表示';
setStyle(btn, btnStyle);
btn.addEventListener('click', showIframe);
document.body.appendChild(btn);
document.body.appendChild(container);
export {};
