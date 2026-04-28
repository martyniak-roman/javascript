const table = document.getElementById('table');

const tableForm = document.forms['tableForm'];

tableForm.onsubmit = function (e) {
    e.preventDefault();
    const strings = +tableForm.strings.value;
    const cells = tableForm.cells.value;
    const data = tableForm.data.value;
    console.log(strings,cells,data)

    for (let i = 0; i < strings; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < cells; j++) {
            const td = document.createElement('td');
            td.innerText = data;
            tr.appendChild(td);
        }
        tableForm.appendChild(tr);
    }
}