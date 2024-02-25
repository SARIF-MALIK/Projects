let pi = Math.PI
console.log(pi); 

let add = (a, b)=>a+b; 
let ans1 = add(6,7); 
console.log(ans1); 

let sqr = a => a*a; 
let ans2 = sqr(4); 
console.log(ans2);

//module.exports = {}    //default behaviour 

// module.exports = {myPi:pi, myAdd:add, mySqr:sqr}; 

module.exports = {pi, add, sqr}             // sending values (key is already present in app.js required in var)