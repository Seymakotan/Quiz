function Question(text,choices,answer){
    this.text=text;
    this.choices=choices;
    this.answer=answer;
}

Question.prototype.checkAnswer= function(answer){
    return this.answer===answer;
}

function Quiz(questions){
    this.questions=questions;
    this.score=0;
    this.questionIndex=0;

}

Quiz.prototype.getQuestion=function(){
    return this.questions[this.questionIndex];
}

Quiz.prototype.isFinish=function(){
    return this.questions.length===this.questionIndex;
}

Quiz.prototype.guess=function(answer){
    var question=this.getQuestion();
    if(question.checkAnswer(answer)){
        this.score++;
    }
    this.questionIndex++;
}



var q1=new Question("Web sayfalarını şekillendirmek için hangi dil kullanılır?",["CSS","Java","Python","C++"],"CSS");
var q2=new Question("En populer programlama dili hangisidir ?",["C#","visual basic","node.js","Javascript"],"Javascript");
var q3=new Question("en modern programlama dili hangisidir",["C#","Javascript","asp.net","C++"],"Javascript");
var q4=new Question("En eski programlama dili hangisidir?",["Fortran","C","Java","Python"],"Fortran");
var q5=new Question("Linux işletim sisteminin kurucusu kimdir?",["Steve Jobs","Ada Lovelace","Linus Torvalds","Tesla"],"Linus Torvalds");
var q6=new Question("Bilgisayar bellek birimlerinden 1 byte, kaç bit’ten oluşur?",["3","6","8","10"],"8");
var q7=new Question("Referans tipler nerede saklanır?",["Diskette","Stack bölgesinde","Harddiskde","Heap bölgesinde"],"Heap bölgesinde");



var questions=[q1,q2,q3,q4,q5,q6,q7];

var quiz= new Quiz(questions);

loadQuestion();
function loadQuestion(){
    if(quiz.isFinish()){
        showScore();
    }else{
        var question=quiz.getQuestion();
        var choices=question.choices;
        
        document.querySelector('#question').textContent=question.text;
        for(var i=0; i<choices.length; i++){
            var element= document.querySelector("#choise"+i);
            element.innerHTML=choices[i];

            guess('btn'+i,choices[i]);


        }
        showislem();
    }

}
function next(){

}
function guess(id,guess){
    var btn= document.getElementById(id);
    btn.onclick=function(){
        quiz.guess(guess);
        loadQuestion();
    }
}
function showScore(){
    var html= '<h2>Score</h2><h4> </h4>'+quiz.score;

    document.querySelector('.card-body').innerHTML=html;
}
function showislem(){
    var totalquestion=quiz.questions.length;
    var questionNumber=quiz.questionIndex+1;
    document.querySelector('#progress').innerHTML= questionNumber + ' / ' + totalquestion;
}
