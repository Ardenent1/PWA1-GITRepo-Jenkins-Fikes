/**
 * Teresa Jenkins Fikes
 * Date 11/30/14
 * PWA1 Wk1 Duel 1
 */
(function(){
    //start the fight in console.log
    console.log('FIGHT!');
//Declare variable player names
    var playerOneName = 'Spiderman';
    var playerTwoName = 'Batman';

//Declare variable player health
    var playerOneHealth = 100;
    var playerTwoHealth = 100;

//Declare variable player damage
    var playerOneDamage = 20;
    var playerTwoDamage = 20;


//All of the above can also be simply two different objects for two players
    /*
     ex.
     var playerOne = new Object();
     playerOne.name = "Spiderman";
     playerOne.health = 100;
     playerOne.damage = 30;
     */

//start the round. Round has to start with 0 and increments by one in the fight function.
    var round=0;

    function fight(){
        alert(playerOneName+':'+playerOneHealth+' START '+playerTwoName+':'+playerTwoHealth);
        //run loop with 10 rounds or less
        //the loop will run function until the number 10 is reached.
        for (var i = 0; i < 10; i++)
        {
            //random formula is - Math.floor(Math.random() * (max - min) + min);
            var minDamageOne = playerOneDamage * .5;
            var minDamageTwo = playerTwoDamage * .5;
            var actualdamageOne = Math.floor(Math.random()*(playerOneDamage-minDamageOne)+minDamageTwo);
            var actualdamageTwo = Math.floor(Math.random()*(playerTwoDamage-minDamageTwo)+minDamageTwo);

            //Bring the damage.
            //playerOneHealth = playerOneHealth - dOne
            playerOneHealth-=actualdamageOne;
            playerTwoHealth-=actualdamageTwo;
            //show in console log players health
            console.log(playerOneName+': '+playerOneHealth + ' ' + playerTwoName+':'+playerTwoHealth);

            //check who is the winner
            var result = checkWinner();
            console.log(result);
            if (result==='no winner') {
                //if no winner keep on fighting
                round++;
                //prompt alert window with score
                alert(playerOneName+':'+playerOneHealth+'  *ROUND '+round+' OVER'+'*  '+playerTwoName+':'+playerTwoHealth);

            } else {
                //prompt alert window with result
                alert(result);
                //break condition
                break;
            };

        };
    };
    //check winner function
    function checkWinner() {
        //set var results to now winner string
        var result='no winner';
        //set conditions with string assigned to result var
        if (playerOneHealth<1 && playerTwoHealth<1) {
            result = 'Both of you are dead. Ha! Ha!';
        } else if(playerOneHealth<1) {
            result =playerTwoName+' is the winner'
        } else if (playerTwoHealth<1) {
            result = playerOneName+' is the winner'
        };
        //return the result
        return result;
    };
    //run the fight function
    fight();


})();
