// @ts-nocheck

class MyClass {
  prop = value; // property
  
  constructor(prop: any) { // constructor
    // ...
  }
  
  method(prop: any) {} // method
  
  get something(prop: any) {} // getter method
  set something(prop: any) {} // setter method

  [Symbol.iterator]() {} // method with computed name (symbol here)
  // ...
}

// Example usage
const myBook = new Book(1, "1984", "George Orwell", 328, true);

// Using getters
console.log(myBook.title); // "1984"
console.log(myBook.author); // "George Orwell"

// Using setters
myBook.title = "Animal Farm";
myBook.author = "George Orwell";

console.log(myBook.title); // "Animal Farm"
console.log(myBook.author); // "George Orwell"
