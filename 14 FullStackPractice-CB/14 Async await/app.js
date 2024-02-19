// async function fun(){
//     return 10; 
// }

// let ans = fun(); 
// console.log(ans); 

// ans.then(function(data){
//     console.log(data); 
// })


let h1 = document.querySelector('h1'); 
let ip = document.querySelector('#ip'); 


ip.addEventListener('input', function(e){
    // console.log(e); 
    h1.innerText = e.target.value; 
})





