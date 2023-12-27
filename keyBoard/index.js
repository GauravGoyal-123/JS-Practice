const insert = document.querySelector('.insert');

window.addEventListener('keydown', (e) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${e.key}</td>
        <td>${e.keyCode}</td>
        <td>${e.code}</td>
    `
    insert.appendChild(tr);
    // console.log(tr);
    // console.log(insert);
})