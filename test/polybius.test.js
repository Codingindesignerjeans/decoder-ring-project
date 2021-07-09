// Write your tests here!
const {polybius} = require("../src/polybius.js");

const expect = require("chai").expect;

describe("polybius", () => {

    it("Should encode the input as a string of numbers", () => {
        const actual = polybius("thinkful");
        const expected = "4432423352125413";
      expect(actual).to.eql(expected); 
    });

    it("Should encode the input as a string of numbers with spaces", () => {
        const actual = polybius("Hello world");
        const expected = '3251131343 2543241341';
        expect(actual).to.eql(expected); 
    });
    
    it("Should decode the input as a string of numbers with spaces", () => {
        const actual = polybius("3251131343 2543241341", false);
        const expected = "hello world";
        expect(actual).to.eql(expected); 
    });

    it("Should decode the input as a string of numbers", () => {
        const actual = polybius("4432423352125413", false);
        const expected = "th(i/j)nkful";
        expect(actual).to.eql(expected); 
    });

    it("Should return false because the input is not an even number", () => {
        const actual = polybius("44324233521254134", false);
        const expected = false;
        expect(actual).to.be.false; 
    });


});


// Used the below  examples to create the above tests.
//  polybius("thinkful"); //> "4432423352125413"
//  polybius("Hello world"); //> '3251131343 2543241341'

//  polybius("3251131343 2543241341", false); //> "hello world"
//  polybius("4432423352125413", false); //> "th(i/j)nkful
//  polybius("44324233521254134", false); //> false