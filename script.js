const tableElements = document.querySelectorAll('.table .table__element')

for (let i = 0; i < tableElements.length; i++) {
  tableElements[i].addEventListener('click', () => {
    tableElements[i].innerHTML = i + 1
  })
}

console.log('git change')
