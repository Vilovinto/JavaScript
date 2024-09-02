const input = document.getElementsByTagName('input')[0];
const div = document.getElementsByTagName('div')[0];
input.oninput = function () {
    div.innerText = + this.value * 2.2;
};