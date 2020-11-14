
let arr =[1,2,4,5,6];
let total=0;
for(let i=0;i<arr.length;i++){

    total+=arr[i];
    
}
console.log(total);

// Update array

// let arr2 = [];
let arr2 = new Array(10);

arr2.fill(8);
console.log(arr2);

// tik tok toe games  

let response = new Array (9);

response.fill(false);

for(let i = 0 ; i <response.length ; i ++ ){

    const rand = Math.floor(Math.random()* 10 + 1);
    response[i] = rand > 5 ? "x" :"0";
}

console.log(response);

