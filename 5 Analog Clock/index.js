const hourE1 = document.querySelector(".hour"); 
const minE1 = document.querySelector(".min");
const secE1 = document.querySelector(".sec");


function updateClock(){
    const currentDate = new Date();  
    const hour = currentDate.getHours(); 
    const min = currentDate.getMinutes(); 
    const sec = currentDate.getSeconds(); 

    const hourDeg = (hour/12)*360;
    hourE1.style.transform = `rotate(${hourDeg}deg)`;
    const minDeg = (min/60)*360;
    minE1.style.transform = `rotate(${minDeg}deg)`;
    const secDeg = (sec/60)*360;
    secE1.style.transform = `rotate(${secDeg}deg)`;
}

// updateClock(); 
setInterval(updateClock, 1000); 