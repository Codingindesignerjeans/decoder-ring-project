// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // helper function

  // function hasdupechar(alphabet){
  //   let x = [];
  //   for(char of alphabet)
  // }
  function substitution(input, alphabet, encode = true) {
   

    // First, I need to change the input to lowercase:
    input = input.toLowerCase();

    // early out if alphabet is not entered
    if (!alphabet){
      return false;
    } 
    
    if(Array.from(new Set(alphabet)).length !== 26) return false;

    // adding alphabet
    let abc = "abcdefghijklmnopqrstuvwxyz"

    // if alphabet is less than 26, return false 
    if(alphabet.length !== 26){
      return false;
    }

    
    
    // if the message has a space
    message = alphabet.split("");

    let newMessage = {};
    let decode = {};
    let result = "";
    abc.split("").forEach((letter, index) => {
      newMessage[letter] = message[index];
      decode[message[index]] = letter
    })
    if(encode === false) newMessage = decode
    input.split("").forEach(input => {
      result += input === " " ? " " : newMessage[input]
    })

    return result
  
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };


// input refers to the inputted text to be encoded or decoded.
// alphabet refers to substitution alphabet.
// encode refers to whether you should encode or decode the message. By default it is set to true.
// When building the function, keep the following constraints and rules in mind:

// The input could include spaces and letters as well as special characters such as #, $, *, etc.
// Spaces should be maintained throughout.
// Capital letters can be ignored.
// The alphabet parameter must be a string of exactly 26 characters, which could include special characters such as #, $, *, etc. Otherwise, it should return false.
// All the characters in the alphabet parameter must be unique. Otherwise, it should return false.