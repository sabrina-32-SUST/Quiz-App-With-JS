function populate() {
    if(quiz.isEnded()) {
        showScores();
        
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        
        showProgress();
    }
};




function showProgress() {
    };

function showScores() {
   };


