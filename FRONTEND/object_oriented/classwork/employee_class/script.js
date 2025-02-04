class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }
  calcAnnualSalary() {
    return this.salary * 12;
  }
}

class Manager extends Employee {
  constructor(name, salary, department) {
    super(name, salary);
    this.department = department;
  }

  calcAnnualSalary() {
    const baseSalary = super.calcAnnualSalary();
    const bonus = baseSalary * 0.1; // 10% bonus for managers
    return baseSalary + bonus;
  }
}

const manager1 = new Manager("John Smith", 8000, "Sales");
const manager2 = new Manager("jane Smith", 3200, "Marketing");

console.log(
  `${manager1.name}'s annual salary: $${manager1.calcAnnualSalary()}`
);
console.log(
  `${manager2.name}'s annual salary: $${manager2.calcAnnualSalary()}`
);
