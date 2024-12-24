import { LOCALHOST_URL } from '../common';
// import { combineIdentifiers } from '../hooks/combineIdentifiers';
import { hideIframe, showIframe } from '../hooks/iframe';
import { btnStyle, setStyle } from '../hooks/styles';
var shareForm = function (content) {
    console.log(content);
    // const inputElms = Array.from(document.getElementsByTagName('input'));
    // combineIdentifiers.forEach((val) => {
    //   const elm = inputElms.find(({ id }) => id === val.id);
    //   if (!elm) return;
    //   elm.value = content[val.kind];
    // });
    hideIframe(container);
};
var hideForm = function () {
    hideIframe(container);
};
// const getOrigin = (event: MessageEvent<any>) => {
//   event.source.postMessage(window.location.origin, event.origin);
// }
var iframePostActions = {
    hide: hideForm,
    share: shareForm,
};
window.addEventListener('message', function (event) {
    if (event.source === null)
        return;
    var parentOrigin = event.source.postMessage(window.location.origin, event.origin);
    console.log(parentOrigin);
    if (event.origin !== LOCALHOST_URL)
        return;
    var postData = event.data;
    iframePostActions[postData.action](postData.content);
});
var btn = document.createElement('button');
var container = document.createElement('div');
btn.innerText = 'iframe 表示';
setStyle(btn, btnStyle);
btn.addEventListener('click', function () { return showIframe(container); });
document.body.appendChild(btn);
document.body.appendChild(container);
