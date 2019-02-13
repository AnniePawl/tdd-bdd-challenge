const mocha = require("mocha");
const chai = require("chai");
const utils = require("../utils");
const expect = chai.expect;

// ========================================================
// NOTE: https://mochajs.org/#arrow-functions
// Passing arrow functions (“lambdas”) to Mocha is discouraged.
// Lambdas lexically bind this and cannot access the Mocha context.
// ========================================================


// CIRCLE AREA TEST
// it("should should return the area of a cirle", function() {
//   const hello = utils.sayHello();
//   expect(hello).to.be.a("string");
//   expect(hello).to.equal("Hello");
//   expect(hello).with.lengthOf(5);
// });


// ========================================================
// Level 1 Challenges
// ========================================================

// HELLO TEST
it("should say hello", function() {
  const hello = utils.sayHello();
  expect(hello).to.be.a("string");
  expect(hello).to.equal("Hello");
  expect(hello).with.lengthOf(5);
});

// RECTANGLE AREA TEST
it("should return the area of a 5 by 6 rectangle", function() {
    const rarea = utils.area(5,6);
    expect(rarea).to.be.an("number");
    expect(rarea).to.equal(30);
});

// CIRCLE AREA TEST
it("should return the area of a circle of radius 5",
function() {
    const carea = utils.circleArea(5);
    expect(carea).to.be.an("number");
    expect(carea).to.equal(78.53981633974483);
});
// PERIMETER TEST


// it("should return the are of a circle of radius 5",
// function(){
//     const radius = utils.area();
//     expect(rarea).to.be.an(int);
//     expect(rarea).to.equal(30);  expect(hello).with.lengthOf(2);
// });

// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: The following unimplemented test cases are examples
// of "Pending Tests" in Chai. Someone should write these
// tests eventually.
// ========================================================

it("Should create a new (object) Item with name and price");

it("Should return an array containing all items in cart");

it("Should add a new item to the shopping cart");

it("Should return the number of items in the cart");

it("Should remove items from cart");

// ========================================================
// Stretch Challenges
// ========================================================

it("Should update the count of items in the cart");

it("Should validate that an empty cart has 0 items");

it("Should return the total cost of all items in the cart");
