function myFunction() {
  let inpObj = document.getElementById("day");
  if(!inpObj.checkValidity()) {
    document.getElementById("demo3").innerHTML = inpObj.validationMessage;
  } else { 
    document.getElementById("demo3").innerHTML = "Input Ok"

  }
}