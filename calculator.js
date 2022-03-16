// Add function
function Add(numbers) {
  // Declaring default array,array count & delimiter
  var arr = [];
  var arrLen = 0;
  var delimiter = ",";
  var numString = numbers;
  //   If the string starts with '//' then delimiter gets changed
  if (numbers.startsWith("//")) {
    delimiter = numbers.split("\n")[0].split("//")[1];
    numString = numbers.slice(numbers.indexOf("\n") + 1);
  }

  var tempArr = [];
  arr = numString.split(delimiter);

  // itterating over the array after spliting by delimiter
  arr.forEach((e) => {
    var temp = e.split(/\n/g);
    var tempSum = 0;
    // adding the numbers which are in new line
    temp.forEach((x) => {
      typeof x === "string" && x !== "" ? arrLen++ : null;
      tempSum += parseInt(x);
    });
    tempSum ? tempArr.push(tempSum) : null;
  });

  arr = tempArr;
  //   filter out empty strings
  arr = arr.filter((e) => e != "");
  var spec_count = (numString.match(delimiter) || []).length;
  spec_count += (numString.match(/\n/g) || []).length;

  //   If count of delimiters and \n is more than integer, then input is not valid
  if (spec_count >= arrLen && spec_count != 0) {
    throw new Error("Input not valid");
  }
  //   If have more than two integer separated by delimiter then throw error
  if (arr.length > 2) throw new Error("Too many numbers");
  //   If have 1 or 0 integer in string return 0 or the value
  if (arr.length < 2) return parseInt(arr[0]) || 0;
  var sum = 0;
  var neg = [];

  //   Finding neg. elements and also calculating sum
  arr.forEach((e) => {
    if (parseInt(e) < 0) neg.push(e);
    sum += parseInt(e);
  });
  // If any element is negative throw error
  if (neg.length > 0)
    throw new Error("Negatives not allowed: " + neg.join(","));
  return sum;
}

module.exports = Add;
