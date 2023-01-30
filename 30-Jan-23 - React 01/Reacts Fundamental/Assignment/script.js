let btn = document.querySelector('.increment');
let msg = document.querySelector('.incrementValue');

let count = 0;
btn.addEventListener('click', ()=>{
    msg.innerHTML = `count is ${count++}`;
})