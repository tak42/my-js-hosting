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
var targetInputs = [
    {
        name: 'q1',
        kind: 'name',
    },
    {
        name: 'q2',
        kind: 'email',
    },
    {
        name: 'q5',
        kind: 'old',
    },
];
var searchTargetInputs = function () {
    var arrayInputElms = Array.from(document.getElementsByTagName('input'));
    return arrayInputElms.filter(function (elm) {
        targetInputs.some(function (val) { return val.name === elm.name; });
    });
};
var shareForm = function (contents) {
    var inputElms = searchTargetInputs();
    if (!inputElms.length)
        return console.log("don't get name q");
    console.log(inputElms);
    var convertContents = targetInputs.map(function (input) {
        var content = contents.find(function (_a) {
            var kind = _a.kind;
            return kind === input.kind;
        });
        return { name: input.name, kind: input.kind, value: content ? content.value : '' };
    });
    convertContents.forEach(function (content) {
        inputElms.filter(function (_a) {
            var name = _a.name;
            return name === content.name;
        })[0].value = content.value;
    });
};
var iframePostActions = [
    { action: 'hide', func: hideIframe },
    { action: 'share', func: shareForm },
];
window.addEventListener('message', function (event) {
    if (event.origin !== LOCALHOST_URL)
        return false;
    var postData = event.data;
    var actionFunc = iframePostActions.filter(function (val) { return val.action === postData.action; });
    actionFunc[0].func(postData.contents);
});
var btn = document.createElement('button');
var container = document.createElement('div');
btn.innerText = 'iframe 表示';
setStyle(btn, btnStyle);
setStyle(container, containerStyle);
btn.addEventListener('click', showIframe);
document.body.appendChild(btn);
document.body.appendChild(container);
