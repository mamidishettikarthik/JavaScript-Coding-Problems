//multiplication of two numbers

 function multiply(a, b){
   return a * b
 }
//  input:5,5
// output :25

//-------------------Printing Array elements with Comma delimiters

// Input: Array of elements
// ["h","o","l","a"]

// Output: String with comma delimited elements of the array in th same order.
// "h,o,l,a"

function printArray(array){
  return array.join(',');
}
// input:["h","o","l","a"]
// output:"h,o,l,a"

//           ----------------Opposite number--------

// Very simple, given an integer or a floating-point number, find its opposite.


function opposite(number) {
  return(-number);
 
}
// input 10
// output:-10

// -------------------------Basic Mathematical Operations--------------------------------

// Your task is to create a function that does four basic mathematical operations.
// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

function basicOp(operation, value1, value2)
{
  if (operation === '+') {
      return value1 + value2;
    } else if(operation === '-') {
      return value1 - value2;
    }  else if(operation === '*') {
      return value1 * value2;
    } else if(operation === '/'){
      return value1/value2;
    }
}
// input:('/', 49, 7)
// output:7




