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
  
  
});
