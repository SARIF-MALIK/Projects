

let arr = [10, 30, 60, "sam", {abc: 18}, {obj: function abc(){return 10+30}}]; 

let fn = arr[5];


// console.log(fn.obj()); 

let arr2 = [10, 20, 30, 40, 50]; 
let obj = {
    a: 12, 
    b : "asdf ", 
    c : function (){
        return 2+4; 
    }
}

for(let item of arr2){
    console.log(item);  
}

for(let item in arr2){
    console.log(arr2[item]); 
}

for(let item in obj){
    console.log(item, obj[item]); 
}