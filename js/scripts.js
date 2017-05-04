var roman_number = ["I","II","III","IV","V","VI","VII","VIII","IX"]
var input = [];
var output = [];

function repeat(str, times) {
    return new Array(times + 1).join(str);
}

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
    // debugger;
    number = number.toString();
    input = number.split("");
    // if (input.length>4){
    //   alert("@#$%^&*_*%$#WERT");
    //   break;
    // }

    for(i = input.length - 1;i >= 0; --i){
      var numberToConvert = parseInt(input[i]);
      console.log(numberToConvert);
      console.log(i);
      var romanLetter;
      // convert the first digit to roman numeral
      if (i === input.length-1){
        console.log(i)
        for(j = 1; j<10; j++){

          if (numberToConvert === j){
            romanLetter = roman_number[j-1];
            output.splice(0,0,romanLetter);
            console.log(romanLetter);
            break;
          }
        }
      }
      // convert the 2nd digit to roman numeral
      if (i === input.length-2){
        console.log(i);
        for(j = 1; j<10; j++){
          if (numberToConvert === 9){
            console.log(numberToConvert);
            romanLetter = "XC";
            output.splice(0,0,romanLetter);
            break;
          }
          else if (numberToConvert === 5){
            romanLetter = "L";
            output.splice(0,0,romanLetter);
            break;
          }
          else if (numberToConvert === 4){
            romanLetter = "XL";
            output.splice(0,0,romanLetter);
            break;
          }
          else if (numberToConvert === j){
            console.log(numberToConvert);
            if (5<numberToConvert && numberToConvert<9){
              var multiple = numberToConvert - 5;
              var letterX = repeat("X", multiple);
              output.splice(0,0,"L" + letterX);
              break;
            }
            else{
              var letterX = repeat("X", numberToConvert);
              output.splice(0,0,letterX);
              break;
            }
          }
        }
      }
      // convert the 3rd digit to roman numeral
      if (i === input.length -3){
        for(j = 1; j<10; j++){
          if (numberToConvert === 9){
            romanLetter = "CM";
            output.splice(0,0,romanLetter);
            break;
          }
          else if (numberToConvert === 5){
            romanLetter = "D";
            output.splice(0,0,romanLetter);
            break;
          }
          else if (numberToConvert === 4){
            romanLetter = "CD";
            output.splice(0,0,romanLetter);
            break;
          }
          else if (numberToConvert === j){
            if (5<numberToConvert && numberToConvert<9){
              var multiple = numberToConvert - 5;
              var letterC = repeat("C", multiple);
              output.splice(0,0,"D" + letterC);
              break;
            }
            else{
              var letterC = repeat("C", numberToConvert);
              output.splice(0,0,letterC);
              break;
            }
          }
        }
      }
      // convert the 4th digit to roman numeral
      if (i === input.length -4){
        for(j = 1; j<10; j++){
          if (numberToConvert === 9){
            // 10000 is 10&#773
            romanLetter = "M" + "X&#773";
            output.splice(0,0,romanLetter);
            break;
          }
          else if (numberToConvert === 5){
            romanLetter = "V&#773";
            output.splice(0,0,romanLetter);
            break;
          }
          else if (numberToConvert === 4){
            romanLetter = "M" + "V&#773";
            output.splice(0,0,romanLetter);
            break;
          }
          else if (numberToConvert === j){
            if (5<numberToConvert && numberToConvert<9){
              var multiple = numberToConvert - 5;
              var letterM = repeat("M", multiple);
              output.splice(0,0,"V&#773" + letterM);
              break;
            }
            else{
              var letterM = repeat("M", numberToConvert);
              output.splice(0,0,letterM);
              break;
            }
          }
        }
      }
    }
  }
  // }
  var finalRoman = output.join("");
  console.log(output);
  console.log(typeof finalRoman);
  return finalRoman;

}
function resetFields(){
  $("#display").val(" ");

}
$(document).ready(function(){
  $("form#roman_number_convertor").submit(function(event){
    event.preventDefault();
    resetFields();
    var number = $("input#arabic_number").val();
    $("#display").append(convertor(number));

  });
});
