const input = document.getElementById('secret');
const resultBlock = document.getElementById('result')

input.oninput = function () {
    const kilo = +this.value;
    resultBlock.innerText = +this.value * 2.2;
}