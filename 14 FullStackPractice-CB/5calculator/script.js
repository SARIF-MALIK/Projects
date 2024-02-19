
// const allKeys = document.querySelector('.container'); 
const display = document.querySelector('.display'); 
const numKeys = document.querySelectorAll('.numKey'); 
const operation = document.querySelectorAll('.op'); 
const clrBtn = document.querySelector('.clearBtn'); 
const equalBtn = document.querySelector('.equals'); 

// let operator = ''; 

operation.forEach(element=>{
    element.addEventListener('click', (e)=>{
        // operator = element.innerText; 
        display.innerText += element.innerText; 
    })
})

numKeys.forEach(element => {
    element.addEventListener('click', (e)=>{
        display.innerText += element.innerText; 
    })
});

clrBtn.addEventListener('click', ()=>{
    display.innerText = ''; 
})

equalBtn.addEventListener('click', ()=>{
    let expression = display.innerText; 
    const result = eval(expression); 
    display.innerText = result; 
})
