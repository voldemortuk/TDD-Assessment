const Add = require("../calculator.js");

test("empty string returns 0", () => {
  expect(Add("")).toBe(0);
});

test("one number in string ", () => {
  expect(Add("1")).toBe(1);
  expect(Add("2")).toBe(2);
  expect(() => {
    Add("1,\n");
  }).toThrowError(new Error("Input not valid"));
});

test("two numbers in string ", () => {
  expect(Add("1,2")).toBe(3);
  expect(Add("1\n2,3")).toBe(6);
  expect(() => {
    Add("1,\n2");
  }).toThrowError(new Error("Input not valid"));
  expect(() => {
    Add("-1,2");
  }).toThrowError(new Error("Negatives not allowed: -1"));
  expect(() => {
    Add("-1,-2");
  }).toThrowError(RangeError("Negatives not allowed: -1,-2"));
  expect(Add("//;\n1;2")).toBe(3);
  expect(Add("//#\n1#2\n3")).toBe(6);
});

test("more than two numbers in string ", () => {
  expect(() => {
    Add("1,2,3");
  }).toThrowError(new Error("Too many numbers"));
  expect(() => {
    Add("1,2\n2,3");
  }).toThrowError(new Error("Too many numbers"));
  expect(() => {
    Add("//#\n1#2\n3#4");
  }).toThrowError(new Error("Too many numbers"));
});
