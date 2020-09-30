var cells = document.getElementsByClassName("date")
var input = document.getElementById("cal-input")
var color = document.getElementById("cal-color")
var button = document.getElementById("cal-button")
input.value = ''
color.value = '#b0b0b0'

button.addEventListener('click', setTextToCell, false)
input.addEventListener('keydown', e => { if(e.key === "Enter") setTextToCell() }, false)

function setTextToCell() {
    var sel = document.getElementsByClassName('selected')[0]
    if(sel.childElementCount){
        sel.children[0].textContent = input.value
        sel.children[0].setAttribute('style', `color: ${color.value}`)
    }
    else{
        var node = document.createElement("div")
        var text = document.createTextNode(input.value)
        node.setAttribute('style', `color: ${color.value}`)
        node.appendChild(text)
        sel.appendChild(node)
    }
}

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

var themeButton = document.getElementsByClassName("ChooseTheme")
for(var i=0; i<themeButton.length; ++i) {
    themeButton[i].addEventListener('click', e => {
        document.body.setAttribute('class', e.target.id)
    }, false)
}