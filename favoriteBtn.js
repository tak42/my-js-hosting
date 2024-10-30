"use strict";
var alertBtn = document.createElement('button');
alertBtn.innerHTML = 'Click me';
alertBtn.addEventListener('click', function () {
    alert('Hello');
});
document.body.appendChild(alertBtn);
