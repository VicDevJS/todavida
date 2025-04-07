let cards = document.querySelector('#modelos-cont');
let item = cards.children;
let screen = window.screen.width;
let left;
let right;

if (screen >= 426) {
    left = 40;
    cards.style.left = `${left}px`
} else if (screen >= 376 && screen < 426) {
    left = 70;
    cards.style.left = `${left}px`
} else if (screen >= 321 && screen < 376) {
    left = 43;
    cards.style.left = `${left}px`
} else if (screen <= 320) {
    left = 15;
    cards.style.left = `${left}px`
}


function passe(pass) {
    left = left - pass;
    cards.style.left = `${left}px`;
}

function retornar(x, y) {    
    if (left == y) {
        console.log("ok");
    } else if (left <= -x) {
        left = y;
        cards.style.left = `${y}px`;
    }  
    
    
};

function turnRight() {
    if (screen >= 1441) {
        passe(220.7);
        retornar(879, 40);
    } else if (screen >= 1201 && screen < 1441){
        passe(235);
        retornar(1140, 40);
    } else if (screen >= 769 && screen < 1200){
        passe(220.7);
        retornar(1506, 40);
    } else if (screen >= 426 && screen < 769) {
        passe(220.7);
        retornar(1726, 40);
    } else if (screen >= 376 && screen < 426) {
        passe(250);
        retornar(2500, 70);
    }else if (screen >= 321 && screen < 376) {
        passe(250);
        retornar(2500, 43);
    }else if (screen < 321) {
        passe(250);
        retornar(2500, 15);
    }
}

function turnLeft() {
    if (left <= 70 && left >= 0) {
        console.log("Erro!");
    } else{
        if (screen >= 1441) {
            passe(-220.7);
            retornar(right, 40);
        } else if (screen >= 1201 && screen < 1441){
            passe(-235);
            retornar(right, 40);
        }else if (screen >= 769 && screen < 1200){
            passe(-220.7);
            retornar(right, 40);
        } else if (screen >= 426 && screen < 769) {
            passe(-220.7);
            retornar(right, 40);
        } else if (screen >= 376 && screen < 426) {
            passe(-250);
            retornar(right, 70);
        }else if (screen >= 321 && screen < 376) {
            passe(-250);
            retornar(right, 43);
        }else if (screen < 321) {
            passe(-250);
            retornar(right, 15);
        }
    }
}