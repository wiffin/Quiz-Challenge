var quizQuestions = [
"Canada is the largest country in the world",
"French is an offical language of Canada",
"Canada's flag has a maple leaf on it's flag",
"The national animal of Canada is the polar bear"]

var finish = ["Nice work! If the game isn't busted you got them all right!"] //["Nice work! Check out your final score below!"]

document.getElementById("question").textContent = quizQuestions[0];
quizQuestions.forEach (function(nextQuestion) {
    document.getElementById("false").addEventListener("click", function() {
        if (nextQuestion = quizQuestions[1]) {
            document.getElementById("question").textContent = nextQuestion;
            nextQuestion = quizQuestions[2]



            quizQuestions.forEach (function(nextQuestion) {
                document.getElementById("true").addEventListener("click", function() {
                    if (nextQuestion = quizQuestions[2]) {
                    document.getElementById("question").textContent = nextQuestion;
                    nextQuestion = quizQuestions[3]
                    
                    
                    
                    quizQuestions.forEach (function(nextQuestion) {
                        document.getElementById("true").addEventListener("click", function() {
                            if (nextQuestion = quizQuestions[3]) {
                            document.getElementById("question").textContent = nextQuestion;
                            nextQuestion = quizQuestions[0]
                            


                            quizQuestions.forEach (function(nextQuestion) {
                                document.getElementById("false").addEventListener("click", function() {
                                    if (nextQuestion = quizQuestions[3]) {
                                    document.getElementById("finished").textContent = finish;
};});});};});});};});});};});});
    