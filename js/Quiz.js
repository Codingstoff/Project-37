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
      for(var plr in allContestants)
      {
        var correctAns = "2";
        if(correctAns === allContestants [plr].answer)
       
        fill("Green")
        else
        fill("red");
      
        
      }
    }


    //write condition to check if contestantInfor is not undefined

    //write code to add a note here

    //write code to highlight contest who answered correctly
    
  }

}
