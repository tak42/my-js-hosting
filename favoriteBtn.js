"use strict";
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
// const containerHideStyle: Style[] = [
//   { property: 'height', value: '0' },
//   { property: 'width', value: '0' },
// ];
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
var setAttribute = function (htmlElm, attributes) {
    attributes.forEach(function (obj) {
        htmlElm.setAttribute(obj.quorifiedName, obj.value);
    });
};
// const shareForm = (event: MessageEvent) => {
//   console.log(event);
//   const postData: PostData = event.data;
//   const inputElms = Array.from(document.getElementsByTagName('input'));
//   // データ駆動設計でやるべき
//   inputElms.forEach((elm) => {
//     const formId: CombinedFormIds = elm.id;
//     elm.value = postData.content[formId];
//   });
//   removeHtml(containerData.attr[0].value);
// };
window.addEventListener('message', function (event) {
    // ここでPostDataを受け取れることが確定しているのがナンセンスな気がする
    // const postData: PostData = event.data;
    if ('action' in event.data === false)
        return;
    if (event.data['action'] === 'hide')
        removeHtml(containerData.attr[0].value);
    if (event.data['action'] === 'check' && event.source)
        event.source.postMessage(window.location.origin, { targetOrigin: event.origin });
});
var showIframeBtnData = {
    tag: 'button',
    attr: [],
    init: function (btn) {
        setStyle(btn, btnStyle);
        btn.innerText = 'フォーム表示';
        btn.addEventListener('click', function () { return renderHtml(containerData.tag, containerData.init); });
        btn.addEventListener('click', function () {
            return renderChildHtml(iframeData.tag, iframeData.init, containerData.attr[0].value);
        });
    },
};
var iframeData = {
    tag: 'iframe',
    attr: [
        { quorifiedName: 'src', value: LOCALHOST_URL },
        { quorifiedName: 'sandbox', value: 'allow-scripts allow-same-origin allow-modals' },
    ],
    init: function (iframe) {
        setAttribute(iframe, iframeData.attr);
        setStyle(iframe, iframeStyle);
    },
};
var containerData = {
    tag: 'div',
    attr: [
        {
            quorifiedName: 'id',
            value: crypto.randomUUID(),
        },
    ],
    init: function (container) {
        setAttribute(container, containerData.attr);
        setStyle(container, containerStyle);
    },
};
var renderHtml = function (tag, initFunc) {
    var elm = document.createElement(tag);
    initFunc(elm);
    document.body.appendChild(elm);
};
var renderChildHtml = function (tag, initFunc, parentId) {
    var elm = document.createElement(tag);
    var parentElm = document.getElementById(parentId);
    if (!parentElm)
        return;
    initFunc(elm);
    if (!parentElm.querySelector(tag))
        parentElm.appendChild(elm);
};
var removeHtml = function (id) {
    var elm = document.getElementById(id);
    if (elm)
        document.body.removeChild(elm);
};
var init = function () {
    renderHtml(showIframeBtnData.tag, showIframeBtnData.init);
};
init();
