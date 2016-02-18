'use strict';

class Person {
  /**
   * @param {string} name The name of the person
   * @param {number} age The age of the person
   */
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

/**
 * @constructor
 * @param {string} name The name of the senior citizen
 * @param {number} age The age of the senior citizen
 */
function SeniorCitizen(name, age) {
  this.name = name;
  this.age = age;
}
SeniorCitizen.prototype.greet = function greet() {
  return this.name;
};

const p = new Person('Fatwin', 31);
console.log(`${p.name} is ${p.age} years old.`);

var sc = new SeniorCitizen('elder persion', 32);
console.log('Greet,', sc.greet());
