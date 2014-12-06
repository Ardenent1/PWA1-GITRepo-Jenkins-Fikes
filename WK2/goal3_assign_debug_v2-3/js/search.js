/**
 * Teresa Jenkins Fikes
 * PWA 1 Wk 1 Goal3 Debug
 * Date: 12/04/14
 */

// Create privatized scope using a self-executing function
(function(){//Begin search function
	var showMatches;
// Variable initialization (DO NOT FIX ANY OF THE BELOW VAR's)
	var resultsDIV = document.getElementById("results"); //Define DOM element for search results (returns the element that has the ID attribute with the specified value)
//Define DOM element for search input (forms collection returns an array of all the forms in the current document, e.g. return the name of the first form in the document (first item in array is index of 0 [0]))
	searchInput = document.forms[0].search;
	currentSearch = '' //Define current search as empty string
	;//Closes for variable
// Validates search query
	var validate = function(query){//fix the syntax errors by replacing "==" with "=" and spelled "validate" correctly
// Trim whitespace from start and end of search query
		while(query.charAt(0) === ""){//Fixed a reference error by replacing "=" with "==="
			query = query.substring(1, query.length);//Initalizes the while loop
		}
		;//Cosed the curly brace for while loop
		while(query.charAt(query.length-1)=== ""){//begin while loop to see if search query is empty. charAt() method to return the character at the specified index in a string should be equal to a space
			query = query.substring(0, query.length-1);//Extracts the while loop
		}
		;//Fixed a syntax error by adding a curly brace
		// Check search length, must have 3 characters
		if(query.length < 3){//IF loop to determine is the length of the query search term is too short, or less than 3, to alert the user
			alert("Your search query is too small, try again.");//Quotes added at the end of the sentence
			// (DO NOT FIX THE LINE DIRECTLY BELOW)
			searchInput.focus();//Highlight search input box to show user they are within text area
			return;//return to stop function once above conditions have been met
		}
		;//Closes the curly brace for function
		search(query);//Causes the search query to be displayed
	};//Closes the curly brace for function
	// Finds search matches
	var search = function(query){//Added the opening curly brace
		// split the user's search query string into an array
		var queryArray = query.join(" ");//Variable for the search query array
		// array to store matched results from database.js
		var results = [];//created to store the matched results from the database.js
		// loop through each index of db (database.js) array
		for(var i=0, j=db.length; i<j; i++){//"for loop" for the array

// each db[i] is a single video item, each title ends with a pipe "|"
// save a lowercase variable of the video title
			var dbTitleEnd = db[i].indexOf('|'); //This is the variable for the database title end of the video item.
			var dbItem = db[i].toLowerCase().substring(0, dbTitleEnd); //This is the varible for the dbItem
			// loop through the user's search query words
			// save a lowercase variable of the search keyword
			for(var ii=0, jj=queryArray.length; ii<jj; ii++){
				var qItem = queryArray[ii].tolowercase();//var qitem should be camelCase "qItem"
				// is the keyword anywhere in the video title?
				// If a match is found, push full db[i] into results array
				var compare = dbItem.indexOf(qItem);//should be camelCase and is comparing variables
				if(compare !== -1){//If it is not equal to -1, then I think that the item CAN be found, which should push the database results to results
					results.push(db[i]);
				}; //Closing curly brace for if statement
			}; //Closing curly brace to fix the syntax error
		}; //Closing curly brace to fix the syntax error
		results.sort(); //Enables results to be displayed in an array
// Check that matches were found, and run output functions
		if(results.length = 0){ //If statement that will be enabled if there are no results found
			noMatch(); //This will enable the message "No Results found" to be displayed in the following function
		}else{ //ELSE if there is a match, ie will be enabled if there are results found
			showMatches(results); //This will enable a selection of results to be displayed if there are any
		}; //Closing curly brace for else statement
	}; //Closing curly brace for if statement
// Put "No Results" message into page (DO NOT FIX THE HTML VAR NOR THE innerHTML)
	var noMatch = function(){ //Variable that executes a function if no results are found
		var html = ''+ //Variable for the following HTML
				'<p>No Results found.</p>'+ //HTML message that will be displayed if no results are found
				'<p style="font-size:10px;">Try searching for "JavaScript". Just an idea.</p>' //InnerHTML message that will be displayed along side HTML
			; //Closing semicolon for variable
		resultsDIV.innerHTML = html; //Allowes the HTML and innerHTML to be displayed
	}; //Closing curly brace for function
// Put matches into page as paragraphs with anchors
	var showMatches = function(results){ //Variable that executes the function for results
// THE NEXT 4 LINES ARE CORRECT.
		var html = '<p>Results</p>',//The Variable that enables the HTML, Title, and Url for an item to be properly displayed
			title, //This enables the title of item to be displayed
			url //This enables the url of item to be displayed
			; //Closing semicolon for variable
// loop through all the results search() function
		for(var i=0, j=results.length; i<j; i++){ //The "for loop" for the results
// title of video ends with pipe
// pull the title's string using index numbers
			titleEnd = results[i].indexOf('|'); //Enables the title of a video to end with pipe
			title = results[i].subString(0, titleEnd); //This allows the title's string to be pulled with index numbers
// pull the video url after the title
			url = results[i].substring(results[i].indexOf('|')+1, results[i].length); //Enables the url to be pulled directly after the title
// make the video link - THE NEXT LINE IS CORRECT.
			html += '<p><a href=' + url + '>' + title + '</a></p>'; //Link for the HTML, Title, and Url of video
		}; //Closing curly brace for "for loop"
		resultsDIV.innerHTML = html; //THIS LINE IS CORRECT.
	}; //Closing curly brace for function
// The onsubmit event will be reviewed in upcoming Course Material.
// THE LINE DIRECTLY BELOW IS CORRECT
	document.forms[0].onsubmit = function() { //Begins the function for the onsubmit event
		var query = searchInput.value; //This is the variable for the search input query
		validate(query); //This validates the search query
// return false is needed for most events - this will be reviewed in upcoming course material
// THE LINE DIRECTLY BELOW IS CORRECT
		return false; //Returns function for false statement
	}; //Closed with a curly brace to fix syntax error
})(); //Added a Closing curly brace and statement for the self-executing function

