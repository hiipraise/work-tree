// Define the University class
class University {
  constructor(name) {
    this.name = name;
    this.departments = [];
  }

  addDepartment(department) {
    this.departments.push(department);
    return `Department "${department}" added to ${this.name}.`;
  }

  removeDepartment(department) {
    const index = this.departments.indexOf(department);
    if (index !== -1) {
      this.departments.splice(index, 1);
      return `Department "${department}" removed from ${this.name}.`;
    } else {
      return `Department "${department}" not found in ${this.name}.`;
    }
  }

  displayDepartments() {
    if (this.departments.length === 0) {
      return `No departments in ${this.name}.`;
    } else {
      return `Departments in ${this.name}: ${this.departments.join(", ")}`;
    }
  }
}

// Create an instance of the University class
let myUniversity;

// Event listeners for buttons
document.getElementById("addDepartment").addEventListener("click", () => {
  const universityName = document.getElementById("universityName").value;
  const departmentName = document.getElementById("departmentName").value;

  if (!myUniversity) {
    myUniversity = new University(universityName);
  }

  const result = myUniversity.addDepartment(departmentName);
  document.getElementById("result").textContent = result;
});

document.getElementById("removeDepartment").addEventListener("click", () => {
  const departmentName = document.getElementById("departmentName").value;
  const result = myUniversity
    ? myUniversity.removeDepartment(departmentName)
    : "University not created.";
  document.getElementById("result").textContent = result;
});

document.getElementById("displayDepartments").addEventListener("click", () => {
  const result = myUniversity
    ? myUniversity.displayDepartments()
    : "University not created.";
  document.getElementById("result").textContent = result;
});
