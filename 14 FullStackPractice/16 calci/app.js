
let inp = document.querySelector('input'); 

let btns = document.querySelectorAll('button'); 



btns.forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
        if(e.target.innerText === '='){
            try{
                let sum = inp.value; 
                inp.value = eval(sum); 
            }catch(e){
                let lastValue = inp.value; 
                inp.value = 'invalid'; 
                setTimeout(()=>{
                    inp.value = lastValue.slice(0, -1)
                }, 3000)
            }
           
        }else if(e.target.innerText == 'C'){
            inp.value = ""; 
        }
        else
       inp.value += btn.innerText; 
    })
})


