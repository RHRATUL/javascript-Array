
const numbers = [1,2,3,5,7,8];

// Length 
console.log(numbers.length);

// Push 
numbers.push(10);
console.log(numbers);

// pop 
numbers.pop();
console.log(`pop korle array er last er ta remove hoye jabe  ${numbers}`);
// shift 
numbers.shift();
console.log(numbers);
// unshift 
numbers.unshift(11);
console.log(`Unshift korle array er frist e add hoy ${numbers}`);
// concat 
const myNewArr = [23,24,24,54]

const res = numbers.concat(myNewArr);
console.log(`duita array aksathe kora ${res}`);

// concat using Spread Oparator  
const newArr1 = [1,2,4];

const newArr2 = [6,7,8];

let fnarr = [...newArr1,...newArr2]

console.log(fnarr);

// Another Way to concat 

const result1 = [...numbers,...myNewArr];
console.log(`duita array aksathe kora by spread oparator = ${result1}`);


// include 
const result = numbers.includes(100);
console.log(` 100 array te ase kina thakle true na thakle false  = ${result}`);
// indexOf 
console.log(` ekhane 5 kon  index e je value   ase seta return korba   = ${numbers.indexOf(5)}`);
// Last index of 
console.log(` last thika search kore je index e pabe setar value dekhabe   = ${numbers.indexOf(8)}`);
// slice 
console.log(numbers);
const slicedArr = numbers.slice(4);
console.log(`slice Mane hoto kete fela ba vag kore fela ekhane 4 number index theke kete jabe = ${slicedArr}`);

console.log(numbers);
// splice 

numbers.splice(2,2,33,44,100);

console.log(`Kon jayga theke delet korbo and koyta delet korbo and new value insert ${numbers}`);

// toString 

const arrString = numbers.toString();

console.log(arrString);

// Join 

console.log(numbers.join("="));

// reverse  
console.log(numbers.reverse());
// fill

let Arr3 = new Array(5);

Arr3.fill(100);

console.log(Arr3);
