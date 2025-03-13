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
window.addEventListener('message', function (event) {
    if ('action' in event.data === false)
        return;
    var postData = event.data;
    if (event.data['action'] === 'hide')
        removeHtml(containerData.attr[0].value);
    if (event.data['action'] === 'check' && event.source)
        event.source.postMessage(window.location.origin, { targetOrigin: event.origin });
    if (event.data['action'] === 'share') {
        postData.content.forEach(function (dataSet) {
            updateInputValue(dataSet.id, dataSet.val);
        });
        removeHtml(containerData.attr[0].value);
    }
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
        { quorifiedName: 'src', value: 'http://localhost:3000' },
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
var updateInputValue = function (elementId, newValue) {
    var _a;
    var input = getElementById(elementId);
    if (!input)
        return console.error("id:".concat(elementId, " Input element not found"));
    var nativeInputValueSetter = (_a = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value')) === null || _a === void 0 ? void 0 : _a.set;
    if (!nativeInputValueSetter)
        return console.error("id:".concat(elementId, " Failed to get value setter"));
    nativeInputValueSetter.call(input, newValue);
    input.dispatchEvent(new Event('input', { bubbles: true }));
};
var renderHtml = function (tag, initFunc) {
    var elm = document.createElement(tag);
    initFunc(elm);
    document.body.appendChild(elm);
};
var renderChildHtml = function (tag, initFunc, parentId) {
    var elm = document.createElement(tag);
    var parentElm = getElementById(parentId);
    if (!parentElm)
        return;
    initFunc(elm);
    if (!parentElm.querySelector(tag))
        parentElm.appendChild(elm);
};
var removeHtml = function (id) {
    var elm = getElementById(id);
    if (elm)
        document.body.removeChild(elm);
};
var getElementById = function (id) {
    return document.getElementById(id);
};
renderHtml(showIframeBtnData.tag, showIframeBtnData.init);
export {};
