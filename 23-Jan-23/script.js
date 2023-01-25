const arr = [
    {
        name: "ali",
        age: 45
    },
    {
        name: "rizwan",
        age: 20
    },
    {
        name: "nnn",
        age: 34
    }
]

// for (let i of arr){
//     console.log(i);
// }

const arr1 = arr.map(obj => obj.name);
console.log(arr1);

const arr2 = arr.filter(obj => obj.name==="ali").map(objName => objName.name + " khan");
console.log(arr2);


let obj = {
    firstName : "abdul",
    lastName : "khaliq",
    age: 24,
    city: "khi",
    fullName : function (city) {
        return this.firstName + " "  + this.lastName+" "+city;
    }
}

let obj2={
    firstName: "ali",
    lastName: "khan",
    // city: "khi"
}

let full = obj.fullName.bind(obj2, "isl");
let nu = obj.fullName.call(obj2, "lah");
let obj1 = obj.fullName.bind(obj);

let obj3 = obj.fullName.apply(obj2, ["karachi"]);

console.log(obj3);
console.log(obj1());
console.log(full());
console.log(nu);

let arrr1 = [1,2,3];
let arrr2 = [4,5];
let arrr3 = [10];

let cA = [...arrr1, ...arrr2, ...arrr3];

cA.splice(0,0 , "me");
console.log(cA.slice(4));
console.log(cA);
console.log(arrr1.toString());
console.log(arrr1.join("*"));


console.log("2");
// setTimeout(()=>{
//     console.log("1");
// },0)
console.log(3);



let p = new Promise((resolve, reject)=>{
    let a = 1;
    if (a<0){
        resolve('success')
    } else {
        reject('rejected');
    }
});

p.then(message => console.log(message)).then().catch(message=> console.log(message))



let js = JSON.stringify(obj);
console.log(js);


let obj5 = JSON.parse(js);
console.log(obj5);


fetch("text1.txt")
.then(x=>x.text()).then(y=>console.log(y)).catch(error=>{throw(error)});
// .catch(y=>console.log(y));


try{
    // let a = 2;
    // if(a<1) throw "too low";
    // if(a>3) throw "too High";
    console.log(1/0)
} catch (e) {
    console.log(e.name);
}