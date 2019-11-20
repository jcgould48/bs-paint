

function changeBrush(){
const brushQS = document.querySelector(".brush-icon")
remove(brushQS.classList.item(2))   
brushQS.classList.add("yellow")
}
// Event Listener
let currentColor = document.querySelector(".current-brush").addEventListener("click", changeBrush);
document.querySelector(".current-brush").addEventListener("click", changeBrush);
