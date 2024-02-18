let input = document.querySelector('input'); 
let h1 = document.querySelector('h1'); 
let btn = document.querySelector('button'); 




btn.addEventListener('click', ()=>{ 
    let val = input.value;  
    let newElem  = document.createElement('h1'); 
    newElem.innerText = val; 
    h1.appendChild(newElem); 

    input.value = ""; 

    newElem.addEventListener('click', function(){
        newElem.remove(); 
    })
})