"use strict";
var alertBtn = document.createElement('input');
var alertFunc = function () {
    alert('Hello');
};
alertBtn.addEventListener('click', alertFunc);
document.body.appendChild(alertBtn);
