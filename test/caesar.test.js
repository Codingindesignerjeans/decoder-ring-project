// Write your tests here!
const {caesar} = require("../src/caesar.js");

const expect = require("chai").expect;

describe("caesar", () => {
    it("Should return the input as a coded message after moving the letters to the right by the shift number input", () => {
      const actual = caesar("thinkful", 3);
      const expected = 'wklqnixo';
    expect(actual).to.eql(expected);
    });

    it("Should return the input as a coded message after moving the letters to the left by the shift number input", () => {
       const actual = caesar("thinkful", -3);
       const expected = 'qefkhcri';
    expect(actual).to.eql(expected);
    });


    it("Should return the input as a decoded message after moving the letters to the right by the shift number entered", () => {
    const actual = caesar("wklqnixo", 3, false);
    const expected = 'thinkful';
    expect(actual).to.eql(expected);
    });

    it("Should encode a message after moving the letters to the right by the shift number entered", () => {
    const actual = caesar("This is a secret message!", 8);
    const expected = 'bpqa qa i amkzmb umaaiom!';
    expect(actual).to.eql(expected);
    });

    it("Should decode a message after moving the letters to the right by the shift number entered", () => {
    const actual = caesar("BPQA qa I amkzmb umaaiom!", 8, false);
    const expected = 'this is a secret message!';
    expect(actual).to.eql(expected);
    });

    it("Should return 'false' if no shift number is entered", () => {
      const actual = caesar("thinkful");
      const expected = false
    expect(expected).to.be.false;
    });

    it("Should return 'false' if a shift number greater than 25 is entered", () => {
      const actual = caesar("thinkful", 99);
      const expected = false;
    expect(actual).to.eql(expected);
    });

    it("Should return 'false' if a shift number less than -25 is entered", () => {
      const actual = caesar("thinkful", -26);
      const expected = false;
    expect(actual).to.eql(expected);
    });
});

// Used the below  examples to create the above tests.
// abcdefghijklmnopqrstuvwxyz

//  caesar("thinkful", 3); //> 'wklqnixo' | t > w forwards by 3
//  caesar("thinkful", -3); //> 'qefkhcri' | t > q backwards by 3
//  caesar("wklqnixo", 3, false); //> 'thinkful' | w > t backwards by 3 DECODE
//  caesar("This is a secret message!", 8); //> 'bpqa qa i amkzmb umaaiom!' | t > b forwards by 8
//  caesar("BPQA qa I amkzmb umaaiom!", 8, false); //> 'this is a secret message!' | b > t backwards by 8 DECODE
//  caesar("thinkful"); //> false
//  caesar("thinkful", 99); //> false
//  caesar("thinkful", -26); //> false