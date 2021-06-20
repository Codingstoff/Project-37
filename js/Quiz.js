class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
     question.hide();

     Contestant.getPlayerInfo();

    background("yellow")
    textSize(30)
    text("Results from the Quiz.",425,50);

    if (allContestants !== undefined){
      fill("Blue");
      textSize(20);
      text("*NOTE: Contestant who answered correct are highlighted in green!*",130,230);
      var y = 250+50;
      for(var plr in allContestants)
      {
        var correctAns = "2";
    
        if(correctAns === allContestants [plr].answer)
       
        fill("Green")
        else
        fill("red");
      
        text ( allContestants[plr].name + "   Answer was: " + allContestants[plr].answer,100,y)
        y=y+50
      }
    }



    
  }

}

