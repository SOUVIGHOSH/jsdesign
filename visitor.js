// Visitor is a behavioral design pattern
// The Visitor pattern is used when you need to perform some operation on elements of a complex object structure (such as a composite structure) without having to modify the classes of those elements

function Employee(name) {
  this.name = name;
  this.salary = null;
}

Employee.prototype = {
  getSalary() {
    console.log("Salary is ", this.salary);
  },
  setSalary(sal) {
    this.salary = sal;
  },
  accept(fn) {
    fn.call(this);
  },
};

let bob = new Employee("Bob");
bob.setSalary(1000);
bob.getSalary();
bob.accept(doubleSalary);
bob.getSalary();

function doubleSalary() {
  this.setSalary(this.salary * 2);
}
