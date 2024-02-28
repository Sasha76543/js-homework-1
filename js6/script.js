"use strict";
//1
const src = document.getElementById("img");

link.setAttribute("src", "img/encore-ewp100sb-72405815397367.webp");

//2
const link = document.getElementById("link");

link.setAttribute("link", "img/35-obmp-007-max-228.png");

const image = document.getElementById("img");

image.setAttribute("alt", "prapor 35 obrmp");

//3

document.addEventListener("DOMContentLoaded", function() {
    const btn = document.getElementById("btn");
    const input = document.getElementById("input");

    btn.addEventListener("click", function() {
        btn.innerText = input.value;
    });
});

//4

const ul = document.getElementById('ul');

const first = ul.querySelector('li');
first.textContent = 'first item li';


