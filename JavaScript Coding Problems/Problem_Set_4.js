// ----------------------Using closures to share class state-------------------------

// In object-oriented programming, it is sometimes useful to have private shared state among all instances of a class; in other languages, like ruby, this shared state would be tracked with a class variable. In javascript we achieve this through closures and immediately-invoked function expressions.

// In this kata, I want you to write make a Cat constructor that takes arguments name and weight to instantiate a new cat object. The constructor should also have an averageWeight method that returns the average weight of cats created with the constructor.

// garfield = new Cat('garfield', 25);
// Cat.averageWeight(); // 25

// felix = new Cat('felix', 15);
// Cat.averageWeight();   // now 20

ar Cat = (function () {
 // ... your code here.
  const cats = []
  const constructor = function (name, weight) {
    if (!name || !weight) throw Error('invalid parameters')
    Object.defineProperty(this, 'name', { get: () => name })
    Object.defineProperty(this, 'weight', { get: () => weight, set: value => weight = value })
    cats.push(this)
  }

  constructor.averageWeight = () => cats.reduce((acc, cat) => (acc + cat.weight), 0) / cats.length

  return constructor;
}());
-----------------------------------A Chain adding function---------------------
//   We want to create a function that will add numbers together when called in succession.

// add(1)(2); // == 3
// We also want to be able to continue to add numbers to our chain.

// add(1)(2)(3); // == 6
// add(1)(2)(3)(4); //  == 10
// add(1)(2)(3)(4)(5); // == 15
  
  function add(n){
  // Let the currying begin!
  var fn = function(x) {
    return add(n + x);
  };
  
  fn.valueOf = function() {
    return n;
  };
  
  return fn;
}
--------------------------------------------Function Cache----------------------------
// If you are calculating complex things or execute time-consuming API calls, you sometimes want to cache the results. In this case we want you to create a function wrapper, which takes a function and caches its results depending on the arguments, that were applied to the function.

// Usage example:

// var complexFunction = function(arg1, arg2) { /* complex calculation in here */ };
// var cachedFunction = cache(complexFunction);

// cachedFunction('foo', 'bar'); // complex function should be executed
// cachedFunction('foo', 'bar'); // complex function should not be invoked again, instead the cached result should be returned
// cachedFunction('foo', 'baz'); // should be executed, because the method wasn't invoked before with these arguments


function cache(func) {
  // do your magic here
    var calls = {};
    return function() {
    var key = JSON.stringify(arguments);
    if (!(key in calls)) {
      calls[key] = func.apply(null, arguments);
    }
    return calls[key];
  };
}

-----------------Function Composition--------------
// Function composition is a mathematical operation that mainly presents itself in lambda calculus and computability. It is explained well here, but this is my explanation, in simple mathematical notation:

// f3 = compose( f1 f2 )
//    Is equivalent to...
// f3(a) = f1( f2( a ) )
// Your task is to create a compose function to carry out this task, which will be passed two functions or lambdas. Ruby functions will be passed, and should return, either a proc or a lambda. Remember that the resulting composed function may be passed multiple arguments!

// compose(f , g)(x)
// => f( g( x ) )

function compose(f,g) {
  // Compose the two functions here!
   return function() {
    return f(g.apply(this, arguments));
     };
}

-----------------------------Function Composition one --------------------------------------
// Javascript functions can be combined to form new functions. For example the functions addOne and multTwo can
// be combined to form a new function which first adds one and then multiplies by two, as follows:

// const addOne = (a) => a + 1
// const multTwo = (b) => b * 2
// const addOneMultTwo = (c) => multTwo(addOne(c))

// addOneMultTwo(5) // returns 12

function compose(...args) {
    return function(n) {
        args.reverse().forEach((i) => n=i(n));
        return n;
    }
}



