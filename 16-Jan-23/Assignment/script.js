console.log("Abdul Khaliq");

// Q1-find the union of two arrays

console.log("Q1");
function union(array1, array2) {
    console.log(`[${array1}] U [${array2}]`);
    let arr3 = array1.concat(array2);
    arr3 = arr3.sort();
    let unionResult = new Set(arr3);
    return unionResult;
}
let arr1 = [1, 2, 3];
let arr2 = [3, 2, 5];
console.log("union", union(arr1, arr2));

// Q2-find the intersection of two sets
console.log("Q2");
function intersection(array1, array2) {
    console.log(`[${array1}] inter [${array2}]`);
    let intersectionResult = new Array();
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (array1[i] === array2[j]) {
                intersectionResult.push(array1[i]);
            }
        }
    }
    return intersectionResult;
}
console.log("intersection", intersection(arr1, arr2));

// Q3-write a program to test whether the value is even or not.
console.log("Q3");
function isEven(num) {
    console.log(`Is ${num} an even number? `)
    return num % 2 == 0 ? true : false;
}
console.log(isEven(5));

// Q4-write a program to test whether the value is odd or not
console.log("Q4");
function isOdd(num) {
    console.log(`Is ${num} an odd number? `)
    return num % 2 != 0 ? true : false;
}
console.log(isOdd(3));

// Q5- square the values either it is a single value or an array.
console.log("Q5");
function square(...rest) {
    console.log(`The square of ${rest} is`);
    for (let value of rest) {
        if (typeof value === "object") {
            for (let i = 0; i < value.length; i++) {
                // method 1 - traditional
                // arr.push(value[i] * value[i]);
                // method 2 - map
                return value.map(num => num*num);
            }
        } else {
            // method 1 - traditional
            // value = value * value;
            // arr.push(value);

            // method 2 - map
            return rest.map(num=> num*num);
        }

    }
}
console.log(square(2, 3));
console.log(square([1, 2, 3]))

// Q6- sum the values either it is a single number or an array.
console.log("Q6");
function sum(...rest) {
    console.log(`The sum of ${rest} is`);
    // method 1 - traditional
    // let sum = 0;
    // for (let value of rest) {
    //     sum = sum + value;
    // }
    // return sum;

    // method 2 - using reduce
    return rest.reduce((num1, num2)=> num1+num2);
}

console.log(sum(1, 2, 3, 4, 5));

// Q7- check prime number
console.log("Q7");
function isPrime(num) {
    console.log(`${num} is prime?`)
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            return false;
        } else {
            return true;
        }
    }
}
console.log(isPrime(12));

// Q8- fabonacci series
console.log("Q8");
function fabonacci(num) {
    console.log(`${num} numbers of fabonacci series are`)
    let arr = new Array();
    let x = 0;
    arr.push(x);
    let y = 1;
    arr.push(y);
    let nextNumber = 0;
    for (let i = 0; i < num - 2; i++) {
        nextNumber = x + y;
        x = y;
        y = nextNumber;
        arr.push(nextNumber);
    }
    return arr;
}

console.log(fabonacci(10));