/**
 * Teresa Jenkins Fikes
 * Duel Fight Game - FINISHED
 * Date: 12/11/14

 Assignment 3
 Part 3/3 of series
 */
//SELF executing function
(function(){ //Executes function for code

    console.log("FIGHT!"); 	//Prints the message "FIGHT!!!" on the console

    //Defines the dom pieces; This is multiple ways to define or access HTML tags
    var playerOne_txt = document.getElementById("jb").querySelector("p"); 	//Variable for player one
    var playerTwo_txt = document.getElementById("vm").querySelector("p"); 	//Variable for player two
    var round_txt = document.querySelector("h5"); 	//Variable for the text for each round
    var button = document.getElementById("fight_btn"); 	//Variable for the fight button
    console.log();

    button.addEventListener("click", fight, false); 		//Sets up the click event


    var players = [ 		//Opening array bracket
        { 	//Opening curly brace for player one
            name: "Raven", 	//Player one's name
            damage: 20, 		//Player one's damage
            health: 100 		//Player one's health
        }, 	//Closing curly brace for player one
        {
            name: "Storm",      //Player two's name
            damage: 20,        //Player two's damage
            health: 100        //Player two's health
        }]; 		//Closing curly brace for player two and array bracket for player variables

    var round = 1; 		//Variable for each round

    //This initializes DOM innerHTML text for top of HTML page
    round_txt.innerHTML ="Click FIGHT button to Start!"; //Displays the message "Click FIGHT button to Start!"
    playerOne_txt.innerHTML = players[0].name + ":  " + players[0].health; //Displays player one's name and health to page
    playerTwo_txt.innerHTML = players[1].name + ":  " + players[1].health; //Displays player two's name and health to page

    //Removed the old js function, but need the below if we use addEventListener in Line 15 above
    function fight() { //Executes function for fight

        //removed the old alert(fighter1[0] + ":" + fighter1[2] + " *START* "+ fighter2[0] + ":" + fighter2[2]);
        playerOne_txt.innerHTML = players[0].name + ":  " + players[0].health; //Displays player one's name and health to page
        playerTwo_txt.innerHTML = players[1].name + ":  " + players[1].health; //Displays player two's name and health to page

        var f1 = Math.floor(Math.random() * players[0].damage + players[0].damage * .5); //The Math.floor and Math.random formulas for player one
        var f2 = Math.floor(Math.random() * players[1].damage + players[1].damage * .5); //The Math.floor and Math.random formulas for player two

        players[0].health -= f1; //Displays math formula damage for player one to console
        players[1].health -= f2; //Displays math formula damage for player two to console

        console.log(players[0].health, players[1].health); //Displays the players damage to the console

        var result = winnerCheck(); //Variable for the winner check
        console.log(result); //Displays the result to the console

        round_txt.innerHTML = " ROUND # " + round + " Results "; //Displays the round and results to the page
        round ++; 		//Loop variable for each round


        if(result === "No winner") 		//If statement for each round that no one wins
        { 		//Opening curly brace for if statement
            playerOne_txt.innerHTML = players[0].name + ":  " + players[0].health; //Displays player one's name and health to page
            playerTwo_txt.innerHTML = players[1].name + ":  " + players[1].health; //Displays player two's name and health to page

        } else { 		//Else statement is for either when one player wins, or when both players dies
            playerOne_txt.innerHTML = result; 		//Results will be displayed if player one were to win
            playerTwo_txt.innerHTML = " "; 		//Results will be displayed if player two were to win

            button.removeEventListener("click", fight, false); 		//Disables button for event

            document.querySelector(".buttonblue").innerHTML = "DONE!"; 		//"Done!" will be displayed on button when fight is over

        }	 //Closing curly brace for if/else function

    }   //Closing curly brace for fight function

    function winnerCheck() { 		//Executes function for the winner check
        var result = "No winner"; 	//Variable for the message "No winner"

        if (players[0].health <1 && players[1].health <1) { 	//If statement will apply if both players were to lose
            result = " You Both Die "; 		//The message "You Both Die" will be displayed to the user
        } else if (players[0].health < 1) { 		//Else if statement for if player two were to win
            result = players[1].name + " WINS!!! "; 	//The player's name as well as the message "WINS!!!" will be displayed
        } else if (players[1].health < 1) { 		//Else if statement for if player one were to win
            result = players[0].name + " WINS!!! "; 	//The player's name as well as the message "WINS!!!" will be displayed

        } //Closing curly brace for if/else function
        return result; //Returns result to function
    } //Closing curly brace for winner check function

})(); //Closes self-executing function