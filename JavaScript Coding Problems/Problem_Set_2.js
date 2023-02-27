
// ----------------------------Partition On-------------------------------------------------------------
// Write a function which partitions a list of items based on a given predicate.

// After the partition function is run, the list should be of the form [ F, F, F, T, T, T ] where the Fs (resp. Ts) are items for which the predicate function returned false (resp. true).
function partitionOn(pred, items) {
  let tArr =[];
  let fArr= [];
  for (let i = 0; i < items.length; i++){
	  pred(items[i]) == true ?
		  tArr.push(items[i]):
		  fArr.push(items[i]);
} 
while (items.length != 0){
	items.pop()
 } 
items.push(...fArr,...tArr);
return items.indexOf(tArr[0]);
}
// input:[1, 2, 3, 4, 5, 6];
// output:[1, 3, 5, 2, 4, 6];

// -------------------------Get the Middle Character--------
// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

function getMiddle(s)
{
  //Code goes here!
  var text_len = s.length;
  if (text_len % 2 != 0) 
  {
    let start = (text_len - 1) / 2;
    return s.slice(start, start + 1)
  } 
  else 
  {
    let start = text_len / 2 - 1;
    return s.slice(start, start + 2);
  }
}
// input:"test"
// output:es

// -----------------------Calculating with Functions-------------
// This time we want to write calculations using functions and get the results. Let's have a look at some examples:
// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5

function zero(f) {return f ? f(0) : 0}
function one(f) {return f ? f(1) : 1}
function two(f) {return f ? f(2) : 2}
function three(f) {return f ? f(3) : 3}
function four(f) {return f ? f(4) : 4}
function five(f) {return f ? f(5) : 5}
function six(f) { return f ? f(6) : 6}
function seven(f) {return f ? f(7) : 7}
function eight(f) {return f ? f(8) : 8}
function nine(f) {return f ? f(9) : 9}

function plus(b) {return (a)=>a+b}
function minus(b) {return (a)=>a-b}
function times(b) { return (a)=>a*b}
function dividedBy(b) {return (a)=>Math.floor(a/b)}

// input:eight(minus(three()))
// output:5



