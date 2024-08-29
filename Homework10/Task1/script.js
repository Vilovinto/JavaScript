const buttons = document.getElementsByTagName('button');
const button = buttons[0];
button.onclick = function () {
    document.getElementById('text').remove();
}