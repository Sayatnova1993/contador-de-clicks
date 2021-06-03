var cliq = document.getElementById('box');
cliq.addEventListener('click',clickar);

function clickar() {
    cliq.innerText = Number(cliq.innerText) + 1;
}