"use strict";
var alertBtn = document.createElement('button');
alertBtn.innerHTML = 'Click me';
alertBtn.style.height = '100px';
alertBtn.style.width = '100px';
alertBtn.style.backgroundColor = 'red';
alertBtn.addEventListener('click', function () {
    alert('Hello');
});
document.body.appendChild(alertBtn);
