/**
* Teresa Jenkins Fikes
* PWA 1 Wk 3 Goal3 Debug v2-4
* Date: 12/10/14
*/


// Create privatized scope using a self-executing function
(function(){ 	//Executes function for code
// Variable initialization (DO NOT FIX ANY OF THE BELOW VAR's)
	var resultsDIV = document.getElementById("results"), 	//Variable for the search results
		searchInput = document.forms[0].search, 	//Variable for the search input
		currentSearch = '' 	//Initializes search input
		; 	//Added the Closing semicolon for variable
// Validates search query
	var validate = function(query) { 	//Fixed syntax errors. Replaced "==" with "=" and fixed typo
// Trim whitespace from start and end of search query
		while (query.charAt(0) === "") { 		//Fixed reference error. Replaced "=" with "==="
			query = query.substring(1, query.length); 	//Initializes while loop
		}
		; //Added the Closing curly brace for while loop
		while (query.charAt(query.length - 1) === "") { 	//While loop for invalid character length
			query = query.substring(0, query.length - 1); 	//Initializes while loop
		}
		; 	//Fixed syntax error. Added closing curly brace
// Check search length, must have 3 characters
		if (query.length < 3) { 	//If statement that enables Javascript to display the following alert message
			alert("Your search query is too small, try again."); 	//Fixed syntax error. Added quotes at end of sentence
// (DO NOT FIX THE LINE DIRECTLY BELOW)
			searchInput.focus(); 	//Enables the search input to be displayed
			return; 	//Returns the function
		}
		; 	//Added the Closing curly brace for if statement
		search(query); //Enables the search query to be displayed
	}; 	//Added the Closing curly brace for function
// Finds search matches
	var search = function(query){ 	//Fixed error. Added opening curly brace
// split the user's search query string into an array
		var queryArray = query.split(" "); 	//Fixed type error. Changed "query.join" to "query.split"
// array to store matched results from database.js
		var results = []; 	//Array for the search results in the database.js
// loop through each index of db array
		for(var i=0, j=db.length; i<j; i++) { 	//The "for loop" for the array
// each db[i] is a single video item, each title ends with a pipe "|"
// save a lowercase variable of the video title
			var dbTitleEnd = db[i].indexOf('|'); 	//Variable for the end of the title of video item
			var dbitem = db[i].toLowerCase().substring(0, dbTitleEnd); 	//Fixed syntax error. Camel-cased ".toLowerCase"
// loop through the user's search query words
// save a lowercase variable of the search keyword
			for (var ii = 0, jj = queryArray.length; ii < jj; ii++) { 		//The "for loop" for the search input keywords
				var qitem = queryArray[ii].toLowerCase(); 	//Variable for the qitem //Fixed syntax error. Camel-cased ".toLowerCase"
// is the keyword anywhere in the video title?
// If a match is found, push full db[i] into results array
				var compare = dbitem.indexOf(qitem); 	//Variable for the comparison
				if (compare !== -1) { 	//If statement for comparison
					results.push(db[i]); 	//If the statement is true, this will push full db[i] in to the results array
				}; 		//Added the Closing curly brace for if statement
			}; 		//Fixed syntax error. Added closing curly brace
		}; 		//Fixed syntax error. Added closing curly brace
		results.sort(); 		//Enables results to be displayed
// Check that matches were found, and run output functions
		if(results.length === 0){ 	//Fixed error. Changed "=" to "==="
			noMatch(); 		//This will enable the message "No Results found" to be displayed in the following function
		}else{ 		//Else statement that will be enabled if there are results found
			showMatches(results); 	//This will enable a selection of results to be displayed if there are any
		}; 		//Added the Closing curly brace for else statement
	}; 	//AddedClosing curly brace for if statement
// Put "No Results" message into page (DO NOT FIX THE HTML VAR NOR THE innerHTML)
	var noMatch = function(){ 	//Variable that executes a function if no results are found
		var html = ''+ 	//Variable for the following HTML
				'<p>No Results found.</p>'+ 		//HTML message that will be displayed if no results are found
				'<p style="font-size:10px;">Try searching for "JavaScript". Just an idea.</p>' 	//InnerHTML message that will be displayed along side HTML
			; 	//Added the Closing semicolon for variable
		resultsDIV.innerHTML = html; //Enables the HTML and innerHTML to be displayed
	}; 		//Added the Closing curly brace for function
// Put matches into page as paragraphs with anchors
	var showMatches = function(results){ 	//Variable that executes a function for the results
// THE NEXT 4 LINES ARE CORRECT.
		var html = '<p>Results</p>',		//Variable that enables the HTML, Title, and Url for an item to be displayed
			title, 		//Enables the title of item to be displayed
			url 		//Enables the url of item to be displayed
			; 	//Added the Closing semicolon for variable
//console.log("What is the value of results.length?" + results.length);
// loop through all the results search() function
		for(var i=0, j=results.length; i<j; i++){ 	//The "for loop" for the results
// title of video ends with pipe
// pull the title's string using index numbers
			titleEnd = results[i].indexOf('|'); 		//Enables the title of a video to end with pipe
			title = results[i].substring(0, titleEnd); 	//Fixed type error. Changed camel case "subString" to "substring"
// pull the video url after the title
			url = results[i].substring(results[i].indexOf('|')+1, results[i].length); 		//Enables the url to be pulled directly after the title
// make the video link - THE NEXT LINE IS CORRECT.
			html += '<p><a href=' + url + '>' + title + '</a></p>'; 		//Link for the HTML, Title, and Url of video
		}; //Added the Closing curly brace for "for loop"
		resultsDIV.innerHTML = html; 		//THIS LINE IS CORRECT.
	}; 		//Added the Closing curly brace for function
// The onsubmit event will be reviewed in upcoming Course Material.
// THE LINE DIRECTLY BELOW IS CORRECT
	document.forms[0].onsubmit = function() { 	//Executes function for the onsubmit event
		var query = searchInput.value; 	//Variable for the search input query
		validate(query); 	//Validates the search query
// return false is needed for most events - this will be reviewed in upcoming course material
// THE LINE DIRECTLY BELOW IS CORRECT
		return false; 	//Returns function for false statement
	}; 		//Fixed syntax error. Added closing curly brace
})(); 	//Added the Closing curly brace and statement for the self-executing function
