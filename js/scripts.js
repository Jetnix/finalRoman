var I = 1;
var V = 5;
var X = 10;
var L = 50;
var C = 100;
var D = 500;
var M = 1000;

var output;
function convertor(number){
  if (!isNaN(number) === false){
    alert("Invalid Entry. Enter an arabic number.");
  }
  else (number === parseInt(number)){
    else if (number === 1){
      output = "I";
    }
    else if (number === 5){
      output = "V";
    }
    else if (number === 10){
      output = "X";
    }
    else if (number === 50){
      output = "L";
    }
    else if (number === 100){
      output = "C";
    }
    else if (number === 500){
      output = "D";
    }
    else if (number === 1000){
      output = "M";
    }
    else{
      
    }
  }

}





$(document).ready(function(){

});
