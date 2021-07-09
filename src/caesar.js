// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // In order to endode or decode a message we need access to the alphabet by either using,
  //  a string of characters or using the character codes - charCodeAt.
  // const aphabet = "abcdefghijklmnopqrstuvwxyz";

  function caesar(input, shift, encode = true) {
    // First, I need to change the input to lowercase:
    input = input.toLowerCase();

    // Then I need to create a place to store encoded/decoded message:
    let message = "";

    // Adding an early exit for certain cases of the shift parameter:
    if (shift === null || shift === 0 || shift < -25 || shift > 25){
      return false;
    }

    // Decoding a message always uses a negative shift therefore I need to turn the shift parameter negative
    if (encode === false){
      shift = -shift;
    }

    // Add for loop to loop through input message 
    for(let i=0; i < input.length; i++){
      let inputChar = input.charCodeAt(i);
      
      // the new inputChar + shift (easier to work with)
      let newCharCode = inputChar + shift;

      // Character codes I need to work with are 65-90 for upper and 97-122 for lowercase.
      // character codes > 90 and < 122 are not required and need to be "removed"
      // this looks at the characters and if they are within the correct range, moves them into the message object.
      if(inputChar < 97 ||
        inputChar > 122
        ){
        message += input[i];
      }

      else{
        if(newCharCode <= 96){
          newCharCode +=26;
        }
        
        else if(newCharCode >= 123){
            newCharCode -=26;
          }
          
          message += String.fromCharCode(newCharCode);
        }
      }
      return message;
    }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };


// Used the below instructions to create the function:
//  If the shift value is not present, equal to 0, less than -25, or greater than 25, the function 
//    should return false.
//  Spaces should be maintained throughout, as should other non-alphabetic symbols.
//  Capital letters can be ignored.
//  If a letter is shifted so that it goes "off" the alphabet (e.g. a shift of 3 on the letter "z"), 
//    it should wrap around to the front of the alphabet (e.g. "z" becomes "c").