const btnDecrement= document.querySelector('#decrement');
const btnincrement= document.querySelector('#increment');
let currentValue = 0;

const btnReset= document.querySelector('#reset');
const title= document.querySelector('#title');

btnincrement.addEventListener('click', () =>{
    currentValue ++;
    title.textContent=currentValue;
});

btnDecrement.addEventListener('click', () =>{
    currentValue --;
    title.textContent=currentValue;
});

btnReset.addEventListener('click', () =>{
    currentValue = 0;
    title.textContent=currentValue;
});