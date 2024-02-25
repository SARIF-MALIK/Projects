
// let sam = require('./index')             // .js not required by default req from a js file 
                                        // index file will run completely then it returns obj if exported else empty object
// console.log(sam.add(4,5)); 

// let {pi, add, sqr} = sam; 
 //or

// let {pi:hell, add, sqr}  = require('./index')

// console.log(hell); 


// ===================== FOLDER REQ ================================== // 

let animal = require('./jaanwar'); 

console.log(animal); 

let {cat, dog} = animal 

