/*
 Teresa Jenkins Fikes
 Date: 12/11/14
 * Extra Credit: Mid Term for PWA-1
 */



(function (){
//This sets up the date the toLocaleDateString is so it will appear how it does on the page
    var d = new Date();
    var date = d.toLocaleDateString();

// An array of objects containg the student information
    var studentInfo = [

        {name:"Teresa Fikes",
            address: {street:"303 Jersey Dr", city: "Ashford", state:"AL"},
            GPA: [3.5, 3.2, 4]},
        {name:"Leanna Adams",
            address: {street:"195", city: "Ashford", state:"AL"},
            GPA: [3.3, 3.1, 3.9]}

    ];
// this function averages out the GPA
    var gradeAvg = function(objectStudents){
        var result = 0;
        for(var i=0; i<objectStudents.GPA.length; i++){
//console.log("object length: " + objectStudents.GPA.length);
            result += objectStudents.GPA[i];
        }
        var gpaAverage = result/objectStudents.GPA.length;
        return gpaAverage.toFixed(2)
    };
    console.log ("average "+ gradeAvg(students[0]));
//the function below consoles log out the arrays of students. It is called by student array index position (students[0], students[1].
//it is dynamic and if I add more students to the array I can call the function again and simply change the index position in the array.
//i.e. if I have a third student, I will log out the information by called the function like this: data(students[2]);
    function data(studentNumber){
        console.log ("Name: "+ studentNumber.name);
        console.log ("Address: "+ studentNumber.address.street +", "+studentNumber.address.city+", "+studentNumber.address.state);
        console.log ("GPA: "+ studentNumber.GPA);
        console.log ("Average GPA: "+ gradeAvg(studentNumber))
    }
    data(students[0]);
    data(students[1]);
//the function below will add students to the array above
    addStudents("Sabrina Adams",{street:"277 Jersey Dr",city:"Ashford",state:"AL"}, [3.2, 3.3, 3.0]);
    function addStudents(newName, place, grades) {
// console.log("started");
        var newStudents ={name:newName, address:place,GPA:grades};
// newStudents.name = newName;
// newStudents.address = place;
// newStudents.GPA = grades;
//console.log(newName);
        students.push(newStudents);
    }
    data(students[2]); //returns the added student
// this will generate the date
    var date = new Date ();
    var month = date.getMonth() + 1; // it is 0 based index so we have to add one
    var nDate = date.getDate();// day of the month // not 0 based//actual day of the month
//var day = date.getDay(); // 0 based numbers of the week - 0 to 6
    var year = date.getFullYear();
//var days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fry", "Sat"];
    var months = ["1", "2", "3", "4", "5", "6", "7","8", "9", "10", "11", "12"];
//document.querySelector("#date").innerHTML= months[month] + "/" + nDate + "/" + year;
    var button = document.querySelector(".buttonred");
    var i =0;
    document.querySelector("#name").innerHTML ="Name: "+ students[i].name;
    document.querySelector("#address").innerHTML = "Address: "+ students[i].address.street +", "+ students[i].address.city + ", " + students[i].address.state;
    document.querySelector("#gpa").innerHTML = "GPA: "+ students[i].GPA[0]+", "+students[i].GPA[1]+ ", "+ students[i].GPA[2] ;
    document.querySelector("#gpaavg").innerHTML ="Average GPA: "+ gradeAvg(students[i]);
    document.querySelector("#date").innerHTML= "Date: " + months[month] + "/" + nDate + "/" + year;
    button.addEventListener("click", onClick);
    function onClick() {
//console.log("test time");
        displayData();
    }
    function displayData(){
        if(i<students.length){
            document.querySelector("#name").innerHTML ="Name: "+ students[i+1].name;
            document.querySelector("#address").innerHTML = "Address: "+ students[i+1].address.street +", "+ students[i+1].address.city + ", " + students[i+1].address.state;
            document.querySelector("#gpa").innerHTML = "GPA: "+ students[i+1].GPA[0]+", "+students[i+1].GPA[1]+ ", "+ students[i+1].GPA[2] ;
            document.querySelector("#gpaavg").innerHTML ="Average GPA: "+ gradeAvg(students[i+1]);
            document.querySelector("#date").innerHTML= "Date: " + months[month] + "/" + nDate + "/" + year;
            i++
        } else {
// console.log("in the else");
            button.innerHTML = "DONE!!!";
            button.removeEventListener("click", onClick);
            function onClick() {
//console.log("test time");
                displayData();
            }
        }
    }
})();