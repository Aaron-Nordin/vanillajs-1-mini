console.log("hello world")
const element = document.getElementById("counter")

let count = 0

function increase() {
    count++
    element.innerText = count
}
function decrease() {
    count--
    element.innerText = count
}
function reset() {
    count = 0
    element.innerHTML = `<mark>${count}</mark>`
}

