var cells = document.getElementsByClassName("date")

for(var i=0; i < cells.length; ++i){
    cells[i].addEventListener('click', clickCell, false)
}

function clickCell(e) {
    for(var i = 0; i < cells.length; i++) {
        cells[i].classList.remove('selected');
    }
    this.classList.add('selected');
}