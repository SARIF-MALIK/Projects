
// var a = function fn(){
//     let c = function bn(){
//         return 10+20; 
//     }
// }



// let b = a(); 
// console.log(b);   

// let letval = 10; 

// {
//     letval = 20; 
//     console.log(letval); 
// }

// console.log(letval); 

// // var varval = 60; 
// {
//     var varval = 40; 
//     console.log(varval); 
// }

// console.log(varval); 


// let newArray = arr.map(function(item){
//     return item*item; 
// })



let newFilteredArr = arr.filter(function(item){
    if(item > 70){
        return true; 
    }
    return false; 
})


function x(){
    var a = 7; 
    function y(){
        var a = 10; 
        console.log(a); 
    }
    return y; 
}

var z = x(); 
console.log(z); 
z(); 

let b =10; 
var c = 100; 
console.log(b); 

function fn(){
    console.log(b); 
    console.log(c); 

    var c = 600; 
    console.log(c); 
    return c; 
}

let ans = fn(); 
console.log(c); 
console.log(b); 
console.log(ans); 
