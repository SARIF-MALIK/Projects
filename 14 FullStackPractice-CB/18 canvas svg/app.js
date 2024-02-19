let canvas = document.querySelector('canvas'); 
let ctx = canvas.getContext('2d'); // brush 

ctx.fillStyle = "orange"; 
ctx.fillRect(50,50, 180, 100);               // rectangle    x1, y1, width, height 



// outlined rectangle 
ctx.strokeStyle = "purple"; 
ctx.strokeRect(200, 200, 150, 120); 

// draw line 
ctx.beginPath();
ctx.moveTo(150, 150)
ctx.lineTo(150, 300)
ctx.lineTo(300, 300)
ctx.lineTo(300, 100)

ctx.closePath(); 
ctx.stroke(); 
// ctx.fill(); 


// text 
ctx.font = '30px sans-serif'; 
ctx.fillStyle = 'red'; 
ctx.fillText("sarif", 350, 120); 