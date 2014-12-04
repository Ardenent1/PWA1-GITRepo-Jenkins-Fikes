Name: Teresa Jenkins Fikes
Date: 12/01/14
Class: PWA 1
Assignment: Search Buggy Analyze



// Create privatized scope using a self-executing function
(function(){

	// Variable initialization (DO NOT FIX ANY OF THE BELOW VAR's)
	var resultsDIV = document.getElementById("results"),
		searchInput = document.forms[0].search,
		currentSearch = ''
		; //The semicolon means this is the end of the statement

	// Validates search query
	// Set the var to validate equally to function passing query parameter
	var validqte == function(query){

		// Trim whitespace from start and end of search query
		while(query.charAt(0) = " "){
			//Force the first character of the query and the query length
			query = query.substring(1, query.length);
		};
		//While the querry lenth is minus the 1st character equal to zero
		while(query.charAt(query.length-1) === ""){
			query = query.substring(0, query.length-1);
			;

			// Check search length, must have 3 characters
			if(query.length < 3){
				//notify the alert box the warning query is to small
				alert("Your search query is too small, try again.);

				// (DO NOT FIX THE LINE DIRECTLY BELOW)
				searchInput.focus();
				return;
			};

			search(query);
		};

		// Finds search matches
		//assigns the var search to the function with a query as the parameter
		var search = function(query)

		// split the user's search query string into an array
		// Strings are written with double or single quotes to join its elements together
		var queryArray = query.join(" ");
		//This sets the var results to the array as a placeholder for the results from the database.js
		// array to store matched results from database.js
		var results = [];

		// loop through each index of db array
		for(var i=0, j=db.length; i<j; i++){

			// each db[i] is a single video item, each title ends with a pipe "|"
			// save a lowercase variable of the video title
			var dbTitleEnd = db[i].indexOf('|');
			var dbitem = db[i].tolowercase().substring(0, dbTitleEnd);

			// loop through the user's search query words
			// save a lowercase variable of the search keyword
			for(var ii=0, jj=queryArray.length; ii<jj; ii++){
				var qitem = queryArray[ii].tolowercase();

				// is the keyword anywhere in the video title?
				// If a match is found, push full db[i] into results array
				var compare = dbitem.indexOf(qitem); //if the var compare is not equal to -1
				if(compare !== -1){
					//The results will push the database index in a loop
					results.push(db[i]);
				};
				;
				;
				//use sort function to sort the results
				results.sort();

				// Check that matches were found, and run output functions
				if(results.length = 0){
					noMatch();
				}else{
					//show the matches and the results
					showMatches(results);
				};
			};

			// Put "No Results" message into page (DO NOT FIX THE HTML VAR NOR THE innerHTML)
			//set the var noMatch to function
			var noMatch = function(){
				//set the var html to string
				var html = ''+
							//display the no results message
						'<p>No Results found.</p>'+
						'<p style="font-size:10px;">Try searching for "JavaScript".  Just an idea.</p>'
					;
				//get the HTML syntax describing the element's earlier versions
				resultsDIV.innerHTML = html;
			};

			// Show the matches and the results
			var showMatches = function(results){

				// THE NEXT 4 LINES ARE CORRECT.
				//assign the var htlm to string
				var html = '<p>Results</p>',
					title,
					url
					;

				// loop through all the results search() function
				for(var i=0, j=results.length; i<j; i++){

					// title of video ends with pipe
					// pull the title's string using index numbers
					titleEnd = results[i].indexOf('|');
					//assign the title to results and the first character to the titleEnd
					title = results[i].subString(0, titleEnd);

					// pull the video url after the title
					url = results[i].substring(results[i].indexOf('|')+1, results[i].length);

					// make the video link - THE NEXT LINE IS CORRECT.
					html += '<p><a href=' + url + '>' + title + '</a></p>';
				};
				resultsDIV.innerHTML = html; //THIS LINE IS CORRECT.
			};

			// The onsubmit event will be reviewed in upcoming Course Material.
			// THE LINE DIRECTLY BELOW IS CORRECT
			//Find form 1 and onsubmit run function
			document.forms[0].onsubmit = function(){
				var query = searchInput.value;
				validqte(query);

				// return false is needed for most events - this will be reviewed in upcoming course material
				// THE LINE DIRECTLY BELOW IS CORRECT
				return false;
				;

			})();