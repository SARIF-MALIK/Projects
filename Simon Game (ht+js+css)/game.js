var buttonColors = ['red', 'blue', 'green', 'yellow'];
var userClickedPattern = [];
var gamePattern = [];
var randomChosenColor = 'red';  
var started = false;
var level = 0;

// key press

$(document).on('keypress', function(){
    if(!started){
    $('#level-title').text("Level " + level);
    nextSequence();
    started = true;
    }
});

function nextSequence() {
    userClickedPattern = [];
    var randomNumber = Math.floor(Math.random()*4);
    randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    $('#'+ randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
    level++;
    $("#level-title").text("Level " + level);
}


// button click 
$('.btn').on('click', handler);
function handler(){
    var userChosenColor = this.id;
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length - 1);
}

function playSound(name){
    var audio = new Audio('sounds/'+name+'.mp3');
    audio.play();
}

function animatePress(currentColor){
    var btn = $('#'+currentColor);
    btn.addClass('pressed');
    setTimeout(function() {
        btn.removeClass('pressed');
    }, 200);
}

function checkAnswer(currentLevel){
    if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){
        console.log('success');
        if(userClickedPattern.length === gamePattern.length){
            setTimeout(function(){
                nextSequence();
            }, 1000);
        }
        if(level === 10 || level === 20){
            playSound("success");
        }
    }
    else{
        console.log('wrong');
        $('body').addClass('game-over');
        playSound('wrong');
        setTimeout(function(){
            $('body').removeClass('game-over');
        }, 200)
        $('#level-title').text('Game Over, Press Any Key to Restart');
        startOver();
    }
}

function startOver(){
    level = 0; 
    gamePattern = [];
    started = false;
}