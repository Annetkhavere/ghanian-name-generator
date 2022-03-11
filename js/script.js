$(document).ready(function(){
let form = document.getElementById('form');

form.addEventListener("submit", function(event) {
  event.preventDefault(); //cancel the default behavior for the event.

  akanCalculation(); //call the function
});


function akanCalculation() {

//collect data from the form
   let dayInput = document.getElementById('day').value
   let monthInput = document.getElementById('month').value
   let yearInput = document.getElementById('year').value
   let genderInput = document.getElementById('gender').value
// declare arrays
   let maleAkanNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
   
   let femaleAkanNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

  let CC = parseInt(dayInput.substring(0,2));
  let YY = parseInt(yearInput.substring(2));
  let MM = parseInt(monthInput);
  let DD = parseInt(dayInput);
  let dayOfTheWeek = Math.floor ( ( ( (CC/4) - 2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7);

  if(dayInput <= 0 || dayInput > 31) {
    alert("Invalid date. Please enter a valid date");
  } else if(monthInput <= 0 || monthInput > 12) {
    alert("Invalid month.Please enter a valid month");
  } else if(yearInput <= 0 || yearInput > 2022) {
    alert("Invalid year. Please enter a valid year");
  }

   if(genderInput == "female") {

    alert("Your Akan Name is: " + femaleAkanNames[dayOfTheWeek]);
     

   } else if(genderInput == "male") {

    alert("Your Akan Name is: " + maleAkanNames[dayOfTheWeek]);

   }

  }

});

