/**
 * Teresa Jenkins Fikes
 * Duel Fight Game - FINISHED
 * Date: 11/30/14

 Assignment 1
 Part 1/3 of series
*/

// self-executing function
(function(){

    console.log("FIGHT!!!");

    //player name
    //Add in the player's name
    var playerOneName = "Spiderman";
    var playerTwoName = "Batman";

    //player damage
    //Decide the increments of damage done
    var player1Damage = 20;
    var player2Damage = 20;

    //player health
    //Set the amount of health the player will start with
    var playerOneHealth = 100;
    var playerTwoHealth = 100;

    //initiate round
    //Start playing the next round of the game
    var round=0;

    function fight(){
        //FIGHT!
        //Alert the users or players to the health and starting of the games
        alert(playerOneName+":"+playerOneHealth+"  *START*  "+playerTwoName+":"+playerTwoHealth);
        for (var i = 0; i < 10; i++)//
        {
            //random formula is - Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = player1Damage * .5;
            var minDamage2 = player2Damage * .5;
            var f1 = Math.floor(Math.random()*(player1Damage-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(player2Damage-minDamage2)+minDamage2);

            //inflict damage
            //display the amount of damage done
            playerOneHealth-=f1;
            playerTwoHealth-=f2;

            console.log(playerOneName+": "+playerOneHealth + " " + playerTwoName+":"+playerTwoHealth);
            //Announce the health of each player

            //check for winner
            var result = winnerCheck();
            console.log(result);
            if (result==="no winner")
            //If there is no winner and still has health left then play again    
            {
                round++;
                alert(playerOneName+":"+playerOneHealth+"  *ROUND "+round+" OVER"+"*  "+playerTwoName+":"+playerTwoHealth);
//If there is no winner and still has health left then play again 
            } else{
                alert(result);
                break;
            };

          };
    };

    function winnerCheck(){
        var result="no winner";
        if (playerOneHealth<1 && playerTwoHealth<1)
        {
            result = "You Both Die";//If there is a No Winner, then announce it is a tied game and both players die
        } else if(playerOneHealth<1){
            result =playerTwoName+"WINS!!!"
            //If playerTwoName wins announce "playerTwoName Wins!"
        } else if (playerTwoHealth<1)
        {
            result = playerOneName+" WINS!!!"
            //If playerTwoName wins announce "playerOneName Wins!"
        };
       return result;
    };

    /*******  The program gets started below *******/
    fight();

})();