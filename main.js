var cells = document.getElementsByClassName("date")
var input = document.getElementById("cal-input")
var setText = document.getElementById("cal-setText")

setText.addEventListener('click', () => {
    var sel = document.getElementsByClassName('selected')[0]
    if(sel.childElementCount){
        sel.children[0].textContent = input.value
    }
    else{
        var node = document.createElement("span")
        var text = document.createTextNode(input.value)
        node.appendChild(text)
        sel.appendChild(node)
    }
}, false)

for(var i=0; i < cells.length; ++i){
    cells[i].addEventListener('click', clickCell, false)
}

function clickCell(e) {
    for(var i = 0; i < cells.length; i++) {
        cells[i].classList.remove('selected');
    }
    this.classList.add('selected');
    if(this.children.length) input.value = this.children[0].textContent
    else input.value = ''
}
