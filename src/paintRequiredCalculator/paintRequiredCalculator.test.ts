import paintRequiredCalculator from "./paintRequiredCalculator";

describe("paintRequiredCalculator", () => {
  // Original test
  test("should return expected result", () => {
    const result = paintRequiredCalculator(50, 10);
    expect(result).toEqual(5);
  });

  // New test cases
  test("should return Infinity when coveragePerLiter is 0", () => {
    expect(paintRequiredCalculator(50, 0)).toBe(Infinity);
  });

  test("should return negative result when area is negative", () => {
    expect(paintRequiredCalculator(-50, 10)).toBe(-5);
  });

   test("should handle decimal inputs", () => {
    expect(paintRequiredCalculator(5.5, 0.5)).toBe(11);
  });

  test("should return very large result for small coverage", () => {
    expect(paintRequiredCalculator(1000, 0.1)).toBe(10000);
  });
   //unimplemented tests commented out for now
  // test("should return negative result when coveragePerLiter is negative", () => {
  //   expect(paintRequiredCalculator(50, -10)).toBe(-5);
  // });

  // test("should return positive result when both inputs are negative", () => {
  //   expect(paintRequiredCalculator(-50, -10)).toBe(5);
  // });

  // test("should return floating point result", () => {
  //   expect(paintRequiredCalculator(55, 10)).toBe(5.5);
  // });

  // test("should return very small result for large coverage", () => {
  //   expect(paintRequiredCalculator(1, 1000)).toBe(0.001);
  // });

  // test("should return 0 when area is 0", () => {
  //   expect(paintRequiredCalculator(0, 10)).toBe(0);
  // });
});
