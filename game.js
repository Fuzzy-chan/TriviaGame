//hides that which should not be seen!
$(".game").hide();
$(".confirm").hide();
$(".card").hide();
//sets my needed variables
var intervalId;
var time = 60;
var rightAnswers = 0;
var wrongAnswers = 0;
var unansweredAnswers = 0;
var timerOn = false;

//tallies results
function results(){
    $(".right").text(rightAnswers);
    $(".wrong").text(wrongAnswers);
    $(".unanswered").text(unansweredAnswers);
}

//ticks time down when called
function count(){
    time--
    var timeLeft = timeConverter(time);
    $(".timer").text(timeLeft);
    if (time === 0){
        clearInterval(intervalId);
        $(".game").hide();
        $(".confirm").hide();
        $(".card").show();
        checkScore();
        results();
    }
}
//converts time to mm:ss format
function timeConverter(t) {

    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes === 0) {
      minutes = "00";
    }

    else if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
}

//reloads page to play again
$(".restartBtn").on("click",function(){
    location.reload();
})
//confirms selections
$(".confirmBtn").on("click", function(){
    $(".game").hide();
    $(".confirm").hide();
    $(".card").show();
    checkScore();
    results();
    clearInterval(intervalId);

});

//starts game
$(".startBtn").on("click",function(){
    $(".game").show();
    $(".confirm").show();
    $(".jumbotron").hide();
    $(".startBtn").hide();
    if (timerOn === false){
        timerOn = true;
    intervalId = setInterval(count,1000)
    }
});
//sees if correct
function checkScore(){
//question 1
if (document.getElementById("q1o3").checked === true){
    rightAnswers++    
}
else if (document.getElementById("q1o1").checked === false && document.getElementById("q1o2").checked === false && document.getElementById("q1o3").checked === false && document.getElementById("q1o4").checked === false){
    unansweredAnswers++
}
else if (document.getElementById("q1o2").checked === true || document.getElementById("q1o1").checked === true || document.getElementById("q1o4").checked === true) {
    wrongAnswers++
}

//question 2
if (document.getElementById("q2o1").checked === true){
    rightAnswers++    
}
else if (document.getElementById("q2o1").checked === false && document.getElementById("q2o2").checked === false && document.getElementById("q2o3").checked === false && document.getElementById("q2o4").checked === false){
    unansweredAnswers++
}
else if (document.getElementById("q2o2").checked === true || document.getElementById("q2o3").checked === true || document.getElementById("q2o4").checked === true) {
    wrongAnswers++
}

//question 3
if (document.getElementById("q3o2").checked === true){
    rightAnswers++    
}
else if (document.getElementById("q3o1").checked === false && document.getElementById("q3o2").checked === false && document.getElementById("q3o3").checked === false && document.getElementById("q3o4").checked === false){
    unansweredAnswers++
}
else if (document.getElementById("q3o3").checked === true || document.getElementById("q3o1").checked === true || document.getElementById("q3o4").checked === true) {
    wrongAnswers++
}

//question 4
if (document.getElementById("q4o3").checked === true){
    rightAnswers++    
}
else if (document.getElementById("q4o1").checked === false && document.getElementById("q4o2").checked === false && document.getElementById("q4o3").checked === false && document.getElementById("q4o4").checked === false){
    unansweredAnswers++
}
else if (document.getElementById("q4o2").checked === true || document.getElementById("q4o1").checked === true || document.getElementById("q4o4").checked === true) {
    wrongAnswers++
}

//question 5
if (document.getElementById("q5o4").checked === true){
    rightAnswers++    
}
else if (document.getElementById("q5o1").checked === false && document.getElementById("q5o2").checked === false && document.getElementById("q5o3").checked === false && document.getElementById("q5o4").checked === false){
    unansweredAnswers++
}
else if (document.getElementById("q5o2").checked === true || document.getElementById("q5o1").checked === true || document.getElementById("q5o4").checked === true) {
    wrongAnswers++
}
console.log("Right Answers: " + rightAnswers);
console.log("Wrong Answers: "+ wrongAnswers);
console.log("Unanswered: " + unansweredAnswers);
}

