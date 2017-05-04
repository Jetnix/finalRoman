var roman_number = ["I","II","III","IV","V","VI","VII","VIII","IX"]
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
  else if (number === "0"){
    output.push("nulla");
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
      // debugger;
      number = number.toString();
      input = number.split("");
      console.log(input);
      for(i = input.length - 1;i >= 0; --i){
        var numberToConvert = parseInt(input[i]);
        console.log(numberToConvert);
        var romanLetter;
        console.log(numberToConvert);
        if (i === 1){
          for(j = 1; j<10; j++){
            if (numberToConvert === j){
              romanLetter = roman_number[j-1];
              output.splice(0,0,romanLetter)
              console.log(romanLetter);
            }
          }
        }
        // if(numberToConvert === "1"){
        //   romanLetter = "I";
        // }
        // if(numberToConvert === "2"){
        //   romanLetter = "II";
        //   console.log(romanLetter);
        // }
        // if(numberToConvert === "3"){
        //   romanLetter = "III";
        //   console.log(romanLetter);
        // }
        // if(numberToConvert === "4"){
        //   romanLetter = "IV";
        //   console.log(romanLetter);
        // }
        // if(numberToConvert === "5"){
        //   romanLetter = "V";
        //   console.log(romanLetter);
        // }
        // if(numberToConvert === "6"){
        //   romanLetter = "VI";
        //   console.log(romanLetter);
        // }
        // if(numberToConvert === "7"){
        //   romanLetter = "VII";
        //   console.log(romanLetter);
        // }
        // if(numberToConvert === "8"){
        //   romanLetter = "VII";
        //   console.log(romanLetter);
        // }
        // if(numberToConvert === "9"){
        //   romanLetter = "IX";
        //   console.log(romanLetter);
        // }
      }
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
