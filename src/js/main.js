"use strict";

import Field from "./field";

const field = new Field();

let stepNow = 'X';
let gameOver = false; 
let countStep = 0;

const fieldItems = document.querySelectorAll('.field__item');
const header = document.querySelector('.header');
const fieldArea = document.querySelector('.field');

const game = (e)=>{
    const row = e.target.dataset.row;
    const col = e.target.dataset.col;

    if (field.isItemEmpty(row, col) && !gameOver){
        
        countStep++;        
        //Вносим значение в ячейку
        e.target.innerHTML = stepNow;
        field.setItem(row, col, stepNow);
        
       

        if (countStep>=5 && field.isGameOver()){
            
            
            // Зачеркиваем поле
            const winLine = field.getWinLine();
            
            winLine.forEach(lineClasses => {
                const element = document.createElement('div');
                element.classList.add(lineClasses[0]);
                element.classList.add(lineClasses[1]);
                fieldArea.append(element);
            });

            // Блокируем возможность дальше ходить - отключаем addEventListener
            gameOver = true;
            header.innerHTML=`Победил ${stepNow}`;
        } else {            
            changeStep();
            header.innerHTML=`Сейчас ходит ${stepNow}`;
        }

    }        
 }

fieldItems.forEach(item=>{
    item.addEventListener('click', game);
});

function changeStep (){
    (stepNow === 'X') ? stepNow = 'O' : stepNow = 'X';
}




