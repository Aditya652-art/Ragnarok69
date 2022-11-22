// alert("Working");

var gamePattern = [] ;

var buttonColours = ["red" , "blue" , "green" , "yellow"];

function nextSequence(){

    var randomNumber = Math.floor(Math.random()*3) +1 ;
    var randomChosenColour = buttonColours[randomNumber] ;
    gamePattern.push(randomChosenColour) ;
    playSound(randomChosenColour) ;
}

$("div").on("click" , function(){
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
});

// $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

// var audio = new Audio("sounds/" + randomChosenColour +".mp3");
// audio.play();


var userClickedPattern = [];

$(".btn").click(function(){

    var userChosenColor = $(this.attr("id"));
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColour);
})

function playSound(name)
{
    // switch(name) {
    //     case "red" :
    //         var audio = new Audio("sounds/red.mp3");
    //         audio.play();
    //         break;

    //     case "blue" :
    //         var audio = new Audio("sounds/blue.mp3");
    //         audio.play();
    //         break;
            
    //     case "green" :
    //         var audio = new Audio("sounds/green.mp3");
    //         audio.play();
    //         break;

    //     case "yellow" :
    //         var audio = new Audio("sounds/yellow.mp3");
    //         audio.play();
    //         break;

    //     case "wrong" :
    //         var audio = new Audio("sounds/wrong.mp3");
    //         audio.play();
    //         break;

    //     default : console.log(randomChosenColour);
    //         break ;
        
    // }

    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}