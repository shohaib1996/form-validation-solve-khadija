// Example 1: Using a callback function to perform an operation after a delay
function greet(name, callback) {
    console.log(`Hello, ${name}!`);
    callback();
  }
  
  function sayGoodbye() {
    console.log("Goodbye!");
  }
  
  // Passing sayGoodbye function as a callback to the greet function
  greet("Alice", sayGoodbye);
  