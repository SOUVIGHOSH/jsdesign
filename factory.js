// Factory design pattern is a creational design pattern
// Factory is an object that has centralized logic to create other objects

class User {
  constructor(name) {
    this.name = name;
  }
}

class Developer extends User {
  constructor(name) {
    super(name);
    this.jobrole = "Developer";
  }
}

class Tester extends User {
  constructor(name) {
    super(name);
    this.jobrole = "Tester";
  }
}

class EmployeeFactory {
  static Generate(name, type) {
    switch (type) {
      case 1:
        return new Developer(name);
        break;
      case 2:
        return new Tester(name);
        break;
      default:
        throw new Error("Invalid Employee type");
    }
  }
}

let dev1 = EmployeeFactory.Generate("Souvik", 1);
let qe1 = EmployeeFactory.Generate("Arun", 2);

function sayHi() {
  console.log(`Hi I am ${this.name}, I am a ${this.jobrole}`);
}

[dev1, qe1].forEach((p) => sayHi.call(p));
