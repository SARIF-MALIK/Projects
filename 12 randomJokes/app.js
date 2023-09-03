
const dataReq = document.querySelector('.refresh'); 
const setup = document.querySelector('.setup'); 
const punchline = document.querySelector('.punchLine'); 


let data = "nothing"; 
async function getData (){  
    let response = await fetch("https://official-joke-api.appspot.com/random_joke"); 
    data = await response.json()
    console.log(data); 
    setup.innerHTML = `<h1>${data.setup}</h1>`
    punchline.innerHTML = `<h2>${data.punchline}</h2>`
}

dataReq.addEventListener('click', ()=>{
    getData(); 
})


