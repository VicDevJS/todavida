let cards = document.querySelector('#modelos-cont');
let item = cards.children;
let screen = window.screen.width;
let left = 45;

for (let i = 0; i < item.length; i++) {
    item[i].innerHTML = `item ${i}`
}

function retornar() {
    if (left <= -900) {
        left = 45
        cards.style.left = `${left}px`;
    }
};

function turnRight() {
    if (screen >= 1400) {
        left = left - 225;
        cards.style.left = `${left}px`;
        retornar();
    }else if (screen >= 800) {
        
    } else {
        
    }
    console.log(left);
    
}


console.log(screen);
