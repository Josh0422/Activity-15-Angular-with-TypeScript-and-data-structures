import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
  name: string = '';
  position: string = '';
  department: string = '';
  searchTerm: string = '';

  // Initial employee list
  employeeList: { name: string, position: string, department: string }[] = [
    { name: 'John Doe', position: 'Developer', department: 'IT' },
    { name: 'Jane Smith', position: 'Designer', department: 'Creative' }
  ];

  // Method to add an employee to the list
  addEmployee() {
    if (this.name && this.position && this.department) {
      const newEmployee = {
        name: this.name.trim(),
        position: this.position.trim(),
        department: this.department.trim()
      };
      this.employeeList.push(newEmployee);

      // Clear input fields after adding
      this.name = '';
      this.position = '';
      this.department = '';
    }
  }

  // Method to remove an employee from the list
  removeEmployee(employee: { name: string, position: string, department: string }) {
    const index = this.employeeList.indexOf(employee);
    if (index !== -1) {
      this.employeeList.splice(index, 1);
    }
  }

  // Method to clear all employees from the list
  clearAll() {
    this.employeeList = [];
  }


  searchEmployees() {
    return this.employeeList.filter(employee =>
      employee.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      employee.position.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      employee.department.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
