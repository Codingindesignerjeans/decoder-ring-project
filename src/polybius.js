// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {

    // First, I need to change the input to lowercase:
    input = input.toLowerCase();
   

    // if (encode === false){
    //   input.split(" ").some((word) => {
    // console.log(word);
    // })};


    // need to add an alphabet
    let alphabet = {a: "11", b: "21", c: "31", d: "41", e: "51", f: "12", g: "22", h: "32", i: "42", j: "42", k: "52", l: "13", m: "23", n: "33", o: "43", p: "53", q: "14", r: "24", s: "34", t: "44", u: "54", v: "15", w: "25", x: "35", y: "45", z: "55", [" "]: " "
  }

    let decoded = {11: "a", 21: "b", 31: "c", 41: "d", 51: "e", 12: "f", 22: "g", 32: "h", 42: "(i/j)", 52: "k", 13: "l", 23: "m", 33: "n", 43: "o", 53: "p", 14: "q", 24: "r", 34: "s", 44: "t", 54: "u", 15: "v", 25: "w", 35: "x", 45: "y", 55: "z", [" "]: " "
  }
  
    // if the input is an odd number, return false (only when decoding) split and some - takes an array of values and returns a bolean
    // input.split(" ").some((word) => {
      // 
    // })

    if(encode === false &&
      input.split(" ").some((word)=> word.length %2 !==0)){
      return false;
    }

    // use .split to create array for easier use
    let message = input.split("");
    
    // this will return the input as a string of numbers
    if(encode === true){
      return message.map((letter) => {
      return alphabet[letter];
    }).join("")};

    // if there is a space
    let space = "";
    const newMessage = message.reduce((mess, char) =>{
      if(char === " ") {
        mess += char;
      }
      else{
        if(space.length === 1){
          space += char;
          mess += decoded[space];
          space = "";
        }
        else{
          space += char;
        }
      }
      return mess;
    }, "");
    
    return newMessage
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };


// input refers to the inputted text to be encoded or decoded.
// encode refers to whether you should encode or decode the message. By default it is set to true.
// When building the function, keep the following constraints and rules in mind:

// You are welcome to assume that no additional symbols will be included as part of the input. 
// Only spaces and letters will be included.
// When encoding, your output should still be a string.
// When decoding, the number of characters in the string excluding spaces should be even. Otherwise, return false.
// Spaces should be maintained throughout.
// Capital letters can be ignored.
// The letters "I" and "J" share a space. When encoding, both letters can be converted to 42, 
// but when decoding, both letters should somehow be shown.