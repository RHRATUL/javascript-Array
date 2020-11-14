const numbers = [1, 2, 3, 4, 5,6];

const students = [{
        name: "Batul",
        id: 01
    },

    {
        name: "Rashidul",
        id: 02
    },
    {
        name: "RH",
        id: 02
    }


]

// Array Traversing using for loop 

for (let i = 0; i < numbers.length; i++) {

    let result = numbers[i];
    result +=numbers[i];
    console.log(result);

  
}



// ForEach

let sum = 0;
numbers.forEach(function(value,index,arr){

    // console.log(value,index,arr);

    sum+=value;
   

})

console.log(sum);
// Map

let mynewmap = students .map(value => {

   return value.name
} );

console.log(mynewmap);



// find
 let result = numbers .find(function(value){
     return value == 5 ;
 });

 console.log(result);
// findIndex

let indresult = numbers.findIndex((ind)=> ind == 5);

console.log(numbers);
console.log(indresult);


// filter

let filstu = students.filter((s)=>s.id <10);
console.log(filstu);

// sort
let sortnum = numbers.sort(function(a,b){

    if(a>b){
        return 1
    } else {
        return -1
    }
})
console.log(sortnum);


let sortstr = students.sort((a,b)=>{
    if(a>b){
        return 1 ;
    } else {

        return -1;
    }
})
console.log(sortstr);
// reduce 

// some 

let stusome = students.some(function(a){
   a.id >10
});

console.log(stusome);

// every