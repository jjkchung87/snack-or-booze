const unroll = require("./unroll");

describe("#unroll", function () {

  it("is a function", function () {
    expect(typeof unroll).toEqual("function");
  });

});

//write a test for the function unroll to check that it gives the right output for the following input:
// [[1, 2, 3],[4,5,6],[7,8,9]]

describe("#unroll", function () {
  
    it("returns the correct output", function () {
      expect(unroll([[1, 2, 3],[4,5,6],[7,8,9]])).toEqual([1,2,3,6,9,8,7,4,5]);
    });
  
  });