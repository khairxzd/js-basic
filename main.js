/**
 * - Variables
 *
 * - Comments
 *
 * - Built-in functions: alert, console, confirm, prompt, set timeout, set interval
 *
 * - Operators: arithmetic, assignment, comparison, logical
 *
 * - Data types: number, string, boolean, undefined, null, symbol, function, object
 *
 * - Truthy and falsy
 * - Falsy values: 0, "", '', NaN, null, undefined
 *
 * - Advanced logical
 *
 * FUNCTION
 * - Parameter function
 * - Arguments
 *
 * - return
 *
 * -types func
 *
 *
 * STRING
 *- String methods: length, indexOf, lasIndexOf, search, slice, replace, toLowerCase, toUpperCase, trim, split
 *
 */

// function writeLog() {
//   for (var param of arguments) {
//     console.log(param);
//   }
// }

// writeLog("html", "css", "js");

// function showMess() {}

// var showMess = function () {};

// var showMess = () => {};

// var fullName = new String("Khairxzd Kieu");

// console.log(typeof fullName);

// var coursesStr = "HTML & CSS, JavaScript, ReactJS";

// function strToArray(str) {
//   return str.split(",");
// }

// // Expected results
// console.log(strToArray(coursesStr));

// // Output: ['HTML & CSS', 'JavaScript', 'ReactJS']

// function getContentLength(content) {
//   return content.length;
// }

// // Mở tab Console để xem kết quả trực quan
// console.log(getContentLength("JavaScript"));
// console.log(getContentLength("Hello World"));

function isNumber(value) {
  if (isNaN(value)) {
    return false;
  }

  return typeof value === "number";
}

// Expected results:
console.log(isNumber(999)); // true
console.log(isNumber("abc")); // false
console.log(isNumber("100")); // false

console.log(isNumber(NaN)); // false
console.log(isNumber(100 / "abc")); // false
