
const arr1 = [1,2,3,4,5];

const arr2 = [7,4,6];

const finalarr = arr1.concat(arr2);

console.log(finalarr);


// using speread oparator

const finalarr2 = [...arr1,...arr2];

console.log(finalarr2);

// Another way 

const finalarr3 = [].concat(arr1,arr2,99,100);

console.log(finalarr3);