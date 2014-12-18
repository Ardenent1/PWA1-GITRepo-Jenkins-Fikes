/**
 * Teresa Jenkins Fikes
 * Date: 12/17/14.
 * Goal 7 Object Constructor Prototype
 */


//create self executing function
(function(){
//add the Person object to the global window object because main.js requires it
    window.Person = Person; //Enables the "person object" for the main.js file
//console.log(Window.Person);
//define all possible job choices and actions for all the Person instances
    Person.jobs = ["Developer", "Butcher", "student", "Cashier"];
    Person.actions = ["Developing Websites", "eating", "Counting money", "working"];//Displays various jobs to the web page
//constructor function
    function Person(name,row){ //pass parameters
        console.log("Person created: ", name);
//"this" keyword to define name
        this.name = name;
//sets initial action for each person randomly
//"this" keyword to define actions
        this.action = Person.actions[Math.floor(Math.random()*Person.actions.length)];
//sets job per person randomly
//"this" keyword to define jobs
        this.job = Person.jobs[Math.floor(Math.random()*Person.jobs.length)];
//defines row so JS knows what row in the HTML to update text in
//"this" keyword to define row
        this.row = row;
//displays initial action
        var id = document.getElementById("r"+this.row+"c3");
        id.innerHTML = this.action;
    }
//Person's update method. Randomly determines if the action changes for each person
//Use math methods to add functionality to Person
    Person.update = function(){
        if (Math.floor(Math.random() <.01)){
            var i = Math.floor(Math.random()*Person.actions.length);
            this.action = Person.actions[i]; //this action prototype is = a action in Persons.actions
            var id = document.getElementById("r"+this.row+"c3"); //define variable to use DOM to manipulate correct row/cell with new person action
            id.innerHTML = this.action; //change action
        }
    };
});
