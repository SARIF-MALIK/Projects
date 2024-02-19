let canvas = document.querySelector('canvas'); 
let ctx = canvas.getContext('2d'); // brush 

let cellSize = 50; 
let boardHeight = 600; 
let boardWidth = 1500; 
let direction = 'right'; 
let gameOver = false; 
let foodCell = generateRandomFood(); 
let score = 0; 
let snakeCells = [ [0, 0], [50, 0]] ; 



function draw(){ 

    if(gameOver === true){ 
        ctx.font = '45px sans-serif'
        ctx.fillStyle = 'red'; 
        ctx.fillText("GAME OVER !!", 600, 300);  
        clearInterval(gameOverId);
        return; 
    }

    ctx.clearRect(0,0, 1500, 600); 
    for(let item of snakeCells){
        let x = item[0]        // ---> x 
        let y = item[1]        // ---> y 

        ctx.fillStyle  ='red'
        ctx.fillRect(x, y, cellSize, cellSize); 
        ctx.strokeStyle = 'blue'
        ctx.strokeRect(x, y, cellSize, cellSize)
    }
    // draw food 
    ctx.fillStyle = "yellow"
    ctx.fillRect(foodCell[0], foodCell[1], cellSize, cellSize); 

    // draw score 
    ctx.font = '25px sans-serif'
    ctx.fillStyle = 'yellow'
    ctx.fillText(`Score: ${score}`, 20, 20); 
}

function update(){
    let headX = snakeCells[snakeCells.length-1][0];  
    let headY = snakeCells[snakeCells.length-1][1];  

    let newHeadX;  
    let newHeadY; 

    
    if(direction === 'up'){
        newHeadX = headX; 
        newHeadY = headY - cellSize; 
    }else if(direction === 'down'){
        newHeadX = headX; 
        newHeadY = headY + cellSize; 

    }else if (direction === 'left'){
        newHeadX = headX - cellSize; 
        newHeadY = headY; 
    }else{
        newHeadX = headX + cellSize; 
        newHeadY  = headY; 
    }
    let selfBite = suicide(newHeadX, newHeadY); 
    
    snakeCells.push([newHeadX, newHeadY]); 
    
    if(newHeadX == foodCell[0] && newHeadY == foodCell[1]){
        foodCell = generateRandomFood(); 
        score++; 
    }else{
        snakeCells.shift(); 
    }

    if(newHeadX >=0 && newHeadX < boardWidth && newHeadY >=0 &&newHeadY <boardHeight && !selfBite){
        gameOver = false; 
    }else{
        gameOver = true; 
        return; 
    }


}

let gamePlayId = setInterval(()=>{
    if(!gameOver){
        update();
        draw(); 
    }
}, 140); 

document.addEventListener('keydown', (event)=>{
    if(event.key === 'ArrowUp'){
        direction = 'up'
    }else if(event.key === 'ArrowDown'){
        direction = 'down'; 
    }else if(event.key === 'ArrowRight'){
        direction = 'right'
    }else{
        direction = 'left'; 
    }

})


function generateRandomFood(){
    return [
        (Math.floor( (Math.random()*boardWidth) / cellSize) )* cellSize, 
        (Math.floor( (Math.random()*boardHeight) / cellSize) )* cellSize, 
    ]
}


function suicide(newHeadX, newHeadY){
    for(let item of snakeCells){
        if(item[0] === newHeadX && item[1] === newHeadY){
            return true; 
        }
    }
    return false; 
}