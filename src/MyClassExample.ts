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