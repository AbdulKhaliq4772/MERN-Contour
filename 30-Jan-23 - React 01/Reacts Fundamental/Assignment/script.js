let root = document.querySelector(".root");

let btn = document.createElement("button");
btn.innerText="increment";
root.appendChild(btn);

let msg = document.createElement("p");
msg.innerHTML="count is 0";
root.appendChild(msg);

let count = 0;
btn.addEventListener('click', ()=>{
    msg.innerHTML = `count is ${++count}`;
})