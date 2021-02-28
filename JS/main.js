function populate() {
    if(quiz.isEnded()) {
        showScores();
        
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
        // show options
var choices = quiz.getQuestionIndex().choices;
for(var i = 0; i < choices.length; i++) {
    var element = document.getElementById("choice" + i);
    element.innerHTML = choices[i];
    guess("btn" + i, choices[i]);


}
        
        showProgress();
    }
};




function showProgress() {
    };

function showScores() {
   };


