/*Teresa Jenkins Fikes
* Date: 12/17/14
* PWA1: goal7_assign_objects

 */

// application scope (self-executing function)

(function(){ //self executing function
    var personNum = 3; //number of people variable
    var people = []; // empty brackets people variable
    var names = ["Teresa", "Stan", "Alex", "Tristan", "Vivian"]; //names of people
    var interval; //length of interval of time
    for (var i = 0; i < personNum; i++){ //for loop
        var personRand = Math.floor(Math.random()*names.length); //number of names
        var currentPerson = new Person(names[personRand], i+1);
        populateHTML(currentPerson.name, "r"+(i+1)+"c1"); //function called for persons name
        populateHTML(currentPerson.job, "r"+(i+1)+"c2"); //function called for persons job
        people.push(currentPerson);
        names.splice(personRand,1);
    }
    clearInterval(interval); //only one interval at a time
    interval = setInterval(runUpdate, 1000/30); //sets interval time
    function populateHTML(data,field){ //function that populated info from person.js and places into HTML
        var id=document.getElementById(field);
        id.innerHTML = data;
    }
    function runUpdate(){ //function to connects to HTML and people.js
        people.forEach(function(element){
            element.update();
        });
    }
})();

})();  // end wrapper