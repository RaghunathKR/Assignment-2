import calculateCanvasSize from "./calculateCanvasSize";

describe("calculateCanvasSize", () => {
  test("returns correct result", () => {
    const result = calculateCanvasSize("10", "100");
    expect(result).toEqual(1000);
  });

  test("returns 0 for one dimension being 0", () => {
    const result = calculateCanvasSize("0", "100");
    expect(result).toEqual(0);
  });

  test("handles empty strings", () => {
    const result = calculateCanvasSize("", "10");
    expect(result).toBeNaN();
  });

  test("handles null-like strings", () => {
    const result = calculateCanvasSize("null", "5");
    expect(result).toBeNaN();
  });

    test("handles decimal strings by truncating", () => {
    const result = calculateCanvasSize("10.9", "2.5");
    expect(result).toEqual(20);
  });

  test("handles both inputs as negative", () => {
    const result = calculateCanvasSize("-4", "-5");
    expect(result).toEqual(20);
  });

   test("handles negative values correctly", () => {
    const result = calculateCanvasSize("-10", "20");
    expect(result).toEqual(-200);
  });

  //Unimplemented tests commented out for now
  // test("returns 0 for both dimensions being 0", () => {
  //   const result = calculateCanvasSize("0", "0");
  //   expect(result).toEqual(0);
  // });

 
  // test("parses strings with extra spaces", () => {
  //   const result = calculateCanvasSize(" 10 ", " 5 ");
  //   expect(result).toEqual(50);
  // });

  // test("handles non-numeric strings by returning NaN", () => {
  //   const result = calculateCanvasSize("abc", "20");
  //   expect(result).toBeNaN();
  // });



  // test("handles very large values", () => {
  //   const result = calculateCanvasSize("1000000", "2000000");
  //   expect(result).toEqual(2000000000000);
  // });

  
});
