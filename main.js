
// FUNCTIONS
const currentBrush = document.querySelector('.current-brush');


function changeBrush(){
    currentBrush.classList.remove(currentBrush.classList.item(1));
    currentBrush.classList.add(event.target.classList.item(1));
}

function changeColor(){
    event.target.classList.remove(event.target.classList.item(1));
    event.target.classList.add(currentBrush.classList.item(1));
}


for(let i = 0; i < 1000; i++){
    let div = document.createElement('div');
    div.className = "square";
    div.style.width = '10px';
    div.style.height = "10px";
    document.querySelector('.canvas').appendChild(div);
}

document.querySelector('.canvas').style.gridTemplateColumns = 'repeat(90, 10px)';
document.querySelector('.canvas').style.gridTemplateRows = 'repeat(50, 10px)';


// EVENT LISTENER
document.querySelectorAll('.palette-color').forEach(color => {color.addEventListener('click', changeBrush)});

document.querySelectorAll('.square').forEach(square => {square.addEventListener('click', changeColor)});