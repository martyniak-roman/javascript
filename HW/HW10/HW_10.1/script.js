const buttons = document.getElementsByTagName('button');
const button = buttons[0];

button.onclick = function () {
    const div = document.getElementById('text');
    div.style.display = 'none';
};