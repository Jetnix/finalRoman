var I = 1;
var V = 5;
var X = 10;
var L = 50;
var C = 100;
var D = 500;
var M = 1000;
var input = [];
var output = [];
function convertor(number){
  if (!isNaN(number) === false){
    alert("Invalid Entry. Enter an arabic number.");
  }
  else if (number === ""){
    alert("Invalid Entry. Enter an arabic number.");
  }
  else {
    number = parseInt(number);
    // debugger;
    if (number === 1){
      output.push("I");
    }
    else if (number === 5){
      output.push("V");
    }
    else if (number === 10){
      output.push("X");
    }
    else if (number === 50){
      output.push("L");
    }
    else if (number === 100){
      output.push("C");
    }
    else if (number === 500){
      output.push("D");
    }
    else if (number === 1000){
      output.push("M");

    }
    else {
      input = number;
      // console.log(input);
    }


  }
  console.log(output);

}



$(document).ready(function(){
  $("form#roman_number_convertor").submit(function(event){
    event.preventDefault();
    var number = $("input#arabic_number").val();
    convertor(number);
  });









});
