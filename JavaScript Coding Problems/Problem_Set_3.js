
//                             -----Prefill an Array--------


/* Create the function prefill that returns an array of n elements that all have the same value v. See if you can do this without using a loop.

 You have to validate input:

 v can be anything (primitive or otherwise)
 if v is ommited, fill the array with undefined
 if n is 0, return an empty array
 if n is anything other than an integer or integer-formatted string (e.g. '123') that is >=0, throw a TypeError  */


function prefill(n, v) {
  if (isNaN(parseInt(n)) || n % 1 !== 0 || n < 0) {
    throw new TypeError(`${n} is invalid`);
  }
  return Array.from({ length: n }).fill(v);
}
// input:prefill(3,1)
// output: [1,1,1]

/* ----------------------------------------Closures and Scopes----------------------

 We want to create a function, which returns an array of functions, which return their index in the array. For better understanding, here an example:
 var callbacks = createFunctions(5); // create an array, containing 5 functions
 callbacks[0](); // must return 0
 callbacks[3](); // must return 3        */

function createFunctions(n) {

  const callbacks = [];

  for (let i=0; i<n; i++) {
    callbacks.push(() => i);
  }
  return callbacks;
}
//input:3
//output:3

/* ---------------------------Can you keep a secret?---------------------------------

 There's no such thing as private properties on a coffeescript object! But, maybe there are?

 Implement a function createSecretHolder(secret) which accepts any value as secret and returns an object with ONLY two methods

 getSecret() which returns the secret
 setSecret() which sets the secret
 obj = createSecretHolder(5)
 obj.getSecret() # returns 5
 obj.setSecret(2)
 obj.getSecret() # returns 2   */

function createSecretHolder(secret) {
  
 return {
    getSecret: function() { return secret; },
    setSecret: function(v) { secret = v; }
  };

}

// input: 5
// output:5
