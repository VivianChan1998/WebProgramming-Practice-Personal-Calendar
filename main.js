var cells = document.getElementsByClassName("date")
var input = document.getElementById("cal-input")
var color = document.getElementById("cal-color")
var button = document.getElementById("cal-button")
var prev_sel = cells[0]
input.value = ''
color.value = '#b0b0b0'

button.addEventListener('click', setTextToCell, false)
input.addEventListener('keydown', e => { if(e.key === "Enter") setTextToCell() }, false)
for(var i=0; i < cells.length; ++i){
    cells[i].addEventListener('click', clickCell, false)
}

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

function clickCell(e) {
    prev_sel.classList.remove('selected');
    prev_sel = this
    this.classList.add('selected');
    if(this.children.length) {
        input.value = this.children[0].textContent
        color.value = rgb2Hex(this.children[0].style.color)
    }    
    else {
        input.value = ''
        color.value = '#b0b0b0'
    }
}

//Additional tool for retrieving the color that was set to text
function rgb2Hex(arr){
    var str = arr.split("(")[1]
    str = str.split(")")[0]
    str = str.split(",")
    var rgb = {r: parseInt(str[0]), g: parseInt(str[1]), b: parseInt(str[2])}
    return '#' + (rgb.r).toString(16) + (rgb.g).toString(16) + (rgb.b).toString(16)
}

//Theme
var themeButton = document.getElementsByClassName("ChooseTheme")
for(var i=0; i<themeButton.length; ++i) {
    themeButton[i].addEventListener('click', e => {
        document.body.setAttribute('class', e.target.id)
    }, false)
}