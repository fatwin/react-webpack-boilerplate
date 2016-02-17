'use strict';
/**
 * @param {string} name The name of the person
 * @param {number} age The age of the person
 */
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const p = new Person('fatwin', 31);
console.log(`${p.name} is ${p.age} years old.`);
