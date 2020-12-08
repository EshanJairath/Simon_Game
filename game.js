alert("hello, Wellcome to my game ");
alert("This Game is created by Eshan Jairath");
var buttonColors = ["red","blue","green","yellow"];
var gamepattern = [];
var userClickedPattern=[];
var level = 0;
var started = false;

$(document).keypress(function(){
    if(!started){
        $("#level-title").text(level +" level");
        nextSequence();
        started =true;
    }
    
});

$(".btn").click(function()
{
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    console.log(userChosenColor);
    playsound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length-1)
});

function checkAnswer(currentLevel){
    if(gamepattern[currentLevel]=== userClickedPattern[currentLevel]){
        if(userClickedPattern.length===gamepattern.length){
            setTimeout(function(){
                nextSequence();
            },1000);
        }
    } 
    else{
        playsound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("Game Over Press Any Key To Restart");

        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);
        startover();
    }
}

function nextSequence(){
    userClickedPattern=[];
    level++;
    $("#level-title").text(level +" level");
    var randNumber = Math.floor(Math.random()*4);
    var randomChosenColor = buttonColors[randNumber];
    gamepattern.push(randomChosenColor);
    $("#"+ randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playsound(randomChosenColor);
}

function playsound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}
function animatePress(currentColor){
    $("#"+ currentColor).addClass("pressed");
    setTimeout(function(){
        $("#"+ currentColor).removeClass("pressed");},100);    
}
function startover()
{
    level=0;
    gamepattern =[];
    started=false;
}
