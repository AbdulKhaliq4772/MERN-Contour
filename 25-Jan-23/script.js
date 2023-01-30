// let fetchPromise = fetch('https://jsonplaceholder.typicode.com/todos/1');

// fetchPromise.then(response => response.json()).then(obj => console.log(obj.id)).catch(msg => console.log(`error : ${msg}`));


// async function myfun(){
//     let fetchPromiseF = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     let data = await fetchPromiseF.json();
//     console.log(data.title);
// }

// myfun();


console.log('start');

const promise1 = new Promise((resolve, reject) => {
  console.log(1)
})

console.log('end');