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
        {name: 'Teresa Fikes', address:{address:'302 Jersey Dr', city:'Winter Park', state:'FL'}, gpa:[3.5, 3.8, 4.0], date:date},
        {name: 'Leanna Adams', address:{address:'195 Jersey Dr', city:'Ashford', state:'AL'}, gpa:[4.55, 3.2, 4.1], date:date},
        {name: 'Mary Carpenter', address:{address:'Apt 709 Memphis Estates', city:'Memphis', state:'TN'}, gpa:[3.9, 4.1, 4.2], date:date}
    ];


// Loop goes through the studentInfo array and console logs all the information
    for(i=0, max=studentInfo.length; i < max; i++){
        console.log("Name: " + studentInfo[i].name);
        console.log("Address: " + studentInfo[i].address.address + " " + studentInfo[i].address.city + " " + studentInfo[i].address.state);
        console.log("GPA: " + studentInfo[i].gpa);
        console.log(studentInfo[i].date);
    };
//Adds the information for the new studeny
    addData('Mike Miller', '3300 Alafaya Trail', 'Tampa', 'FL', [3.1, 4.1, 3.9]);
//Function to add the new student to the studentInfo array
    function addData(name,street,city,state,gpa){
        newStudent = {
            name: name,
            address: {address: street, city: city, state: state},
            gpa: gpa,
            date: date
        };
//Pushes the newStudent into the array
        studentInfo.push(newStudent);
    };
// making the button a variable so it can be called
    var button = document.querySelector('.buttonred');
//Adding an event listener to the button so when it is clicked it will run the displayInfo function
    button.addEventListener("click", displayInfo, false);
// a variabe to be equal to be the length of the studentInfo array
    var studentArray = studentInfo.length;
//A number to start a counter on. This will be called later
    var studentDisplay = 0;
    function displayInfo(event){
//Give each div from the HTML a variable name so it can be changed and called later
        var name = document.querySelector('#name');
        var address = document.querySelector('#address');
        var gpa = document.querySelector('#gpa');
        var date = document.querySelector('#date');
        var gpaAVG = document.querySelector('#gpaavg');
// If the studentDisplay counter is not apart of the studentArray then display the correct data and add to the counter if not
// that means they're at the end of the array. Therefore I remove the event listener and add done to the button
        if(studentDisplay != studentArray){
            name.innerHTML = "Name: " + studentInfo[studentDisplay].name;
            address.innerHTML = "Address: " + studentInfo[studentDisplay].address.address + " " + studentInfo[studentDisplay].address.city + ", " + studentInfo[studentDisplay].address.state;
            gpa.innerHTML = "GPA: " + studentInfo[studentDisplay].gpa;
            date.innerHTML = "Date: " + studentInfo[studentDisplay].date;
            gpaavg.innerHTML = "Average GPA: " + avgGPA(studentInfo[studentDisplay].gpa);
            studentDisplay++;
        }else{
            studentDisplay = 0;
            button.removeEventListener("click", displayInfo, false);
            button.innerHTML = 'DONE!!!'
        }
    };
// This function calculates and returns the GPA
    function avgGPA(event){
        var totalGPA = event[0] + event[1] + event[2];
        var average = totalGPA / 3;
        return average.toFixed(2);
    };
})();