let moneyOptions =[100,1000,10000,100000,1000000];
let moneyCount=0;
let question=["Which of the following names is the coolest?","People who stay calm under pressure are said to have what running through their veins?","This Compton-born rapper got royalty inside his DNA","This slippery nemesis of Harry Potter must not be named","This Nintendo superstar has been a plumber, doctor, and painter"];
let answerA=["Michael","Blood","Sean Carter","Bowser","Mario"];
let answerB=["Jane","Ice","Curtis Jackason","PushaT","Sonic"];
let answerC=["Bob","Lava","Andre Young","Voldermort","Pikachu"];
let answerD=["Stacy","Ketchup", "Kendrick Duckworth","Megatron","Captain Falcon"];
let correctAnswers=["Michael","Ice","Kendrick Duckworth","Voldermort","Mario"];
let name;
for (var money of moneyOptions){
    $(".money").append(`<p>${money}</p>`);
    
}
$(".main").hide();
$("button").click(function(){
    $(".inputDiv").hide(); 
    $(".main").show(); 
    name=$("input").val();
    addQuestion(0,0);
});

function addQuestion(count,index){
    if(moneyCount===count){
    $(".question").text(question[index]);
    $(".a").text(answerA[index]);
    $(".b").text(answerB[index]);
    $(".c").text(answerC[index]);
    $(".d").text(answerD[index]);
}
}
$(".answer").click(function(){
    let selectedAnswer=event.target.innerText;
    /*for(var answer of correctAnswers){
        if(answer===selectedAnswer && moneyCount===0){
            moneyCount=moneyCount+100;
        }else if(answer===selectedAnswer){
            moneyCount=moneyCount*10;
        }
    }*/
    if(correctAnswers.includes(selectedAnswer)&& moneyCount===0){
                    moneyCount=moneyCount+100;
    }else if(correctAnswers.includes(selectedAnswer)){
            moneyCount=moneyCount*10;
        }else{
        alert(`${name}, hit the books or get a real job! You lost.`);  
        $("body").css("background-image","url('https://media1.giphy.com/media/dkuZHIQsslFfy/giphy.gif?cid=790b76115d13eb9e326848416fca6861&rid=giphy.gif')");
        $(".main").hide();
        $(".wallet").hide();
        }
    
    addQuestion(100,1);
    addQuestion(1000,2);
    addQuestion(10000,3);
    addQuestion(100000,4);
    addQuestion(1000000,5);
$(".wallet").html(`<p>Oh wow ${name}, you've made ${moneyCount} dollars.`);
    if(moneyCount===1000000){
        $("body").html("You win!");
        }
});
$(".lifeLines").click(function(){
    $("body").html(`${name}, your life line failed you. Game over!`);
});
$(".money").click(function(){
    $("body").html(`${name}, hands off the money. Answer the questions!`);
});