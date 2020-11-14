
// Use push to insert new element  to the end 

let arr = [2,3,4];

let ourNewArray = [7,8,9];

arr.push(...ourNewArray);

// ... ourNewArray er older version 
// Array.prototype.push.apply(arr,ourNewArray);




console.log(arr);

arr.push(55);

console.log(arr);

// use unshift to insert at the begining

let Myarr = [1,2,3];

Myarr.unshift(4);

console.log(Myarr);

// Use splice to insert at the given index 

let splceArr = [1,2,4,6,9];

splceArr.splice(2,0,3);  // 2 holo index number 0 holo delet korbo kina 3 holo insert number

console.log(splceArr);

splceArr.splice(4,0,5);
console.log(splceArr);