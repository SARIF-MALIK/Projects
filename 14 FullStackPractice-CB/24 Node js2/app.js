
// console.log(process.cwd()); 
// console.log(__dirname); 

console.log(process.argv); 

let arrayInputVal = process.argv.slice(2); 

let myNum = arrayInputVal[0]; 




// for(let i = 1; i<=myNum; i++){
//     if(Number.isInteger(i/3) &&  Number.isInteger(i/5)){
//         console.log('fizz buzz'); 
//     }
//     else if(Number.isInteger(i/3)) {
//         console.log('fizz')
//     } 
//     else if(Number.isInteger(i/5)){
//         console.log('buzz'); 
//     }
//     else
//     console.log(i)

// }

// console.log('namaste G'); 

// for(let i = 1; i<=myNum; i++){
//     let str = ""; 
//     if(i%3 == 0){
//         str += "fizz"
//     }
//     if(i%5 == 0){
//         str += "buzz"
//     }
//     if(str == ""){
//         str += i
//     }
//     console.log(str); 
// }


let cnt3 = 1; 
let cnt5 = 1; 

for(let i = 1; i<=myNum; i++){
    let str = ""; 
    if(cnt3 == 3){
        str += "fizz"
        cnt3 = 0; 
    }
    if(cnt5 == 5){
        str += "buzz"
        cnt5 = 0; 
    }
    if(str == ""){
        str += i
    }
    cnt3++; 
    cnt5++; 
    console.log(str); 
}


// while(1){
//     console.log('1 0 10 0 0 1  1 1 1 10 0 0 0 00 11 11 111  11 1111  11 1 1 1 1 11 0 0 0 0 00 0 0 00 1 1 1 11 1 1 0100 10 10 100 10101 0 101 01010 0101 '); 
//     console.log('0 10 10 1 1 1 1 0 0 0  1 1  1 11 0 01  0  0  0  0 0 0 0 0 0 0 00 1  0 10 10 0010 0011  1 11 1 10 0 00 0 0 11  11 1 1 1 11 1 1 11 1 1 '); 
// }