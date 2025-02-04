var enterBtn = document.getElementById('enter')
var userInput = document.getElementById('userInput')
var ul = document.querySelector('ul')
var item = document.getElementsByTagName('li')

function inputLength() {
    return userInput.value.length
}
function createListElement() {
    var li = document.createElement("li")
    li.appendChild(document.createTextNode(userInput.value))
    ul.appendChild(li)
    var span = document.createElement("span")
    li.appendChild(span)
    span.classList.add('delete')
    // InputEvent.value = ""
    function crossOf() {
        if (li.classList.toggle('done')) {
            span.classList.remove('delete')
            span.innerHTML = "انجام دادم"
        } else {
            span.classList.add('delete')
        }
    }

    li.addEventListener('click', crossOf)
    var delBtn = document.createElement("button")
    delBtn.appendChild(document.createTextNode("X"))
    li.appendChild(delBtn)
    delBtn.addEventListener('click', deleteItem)
    delBtn.style.cursor = 'pointer'
    delBtn.style.float = 'left'
    function deleteItem() {
        li.classList.add('delete')
    }
}
function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement()
    }
}
function addListAfterClickKeyPress(e) {
    if (inputLength() > 0 && e.which === 13) {
        createListElement()
    }
}
userInput.addEventListener('focus', function () {
    var errMessage = document.getElementById('error')
    errMessage.classList.remove('delete')
})
userInput.addEventListener('focusout', function () {
    var errMessage = document.getElementById('error')
    errMessage.classList.add('delete')
})
enterBtn.addEventListener('click', addListAfterClick)
userInput.addEventListener('keypress', addListAfterClickKeyPress)
