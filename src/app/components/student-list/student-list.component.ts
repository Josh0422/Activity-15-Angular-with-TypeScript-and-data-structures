import { Component } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'] // Fixed styleUrl to styleUrls
})
export class StudentListComponent {
  name: string = '';
  course: string = '';
  section: string = '';
  searchQuery: string = ''; // To hold the search input

  // Initial student list
  studentList: { name: string; course: string; section: string }[] = [
    { name: 'dela Rita, Joshua B.', course: 'BSIT', section: '4th Year' },
    { name: 'Rico, Maricar.', course: 'BSIT', section: '4th Year' },
    { name: 'Chico, Anne Cheery.', course: 'BSIT', section: '4th Year' }
  ];

  // Method to add a student to the list
  addItem() {
    if (this.name && this.course && this.section) {
      const newStudent = {
        name: this.name.trim(),
        course: this.course.trim(),
        section: this.section.trim()
      };
      this.studentList.push(newStudent);

      // Clear input fields after adding
      this.clearInputs();
    }
  }

  // Method to remove a student from the list
  removeItem(student: { name: string; course: string; section: string }) {
    const index = this.studentList.indexOf(student);
    if (index !== -1) {
      this.studentList.splice(index, 1);
    }
  }

  // Method to clear all students
  clearAll() {
    this.studentList = [];
  }

  // Method to clear input fields
  clearInputs() {
    this.name = '';
    this.course = '';
    this.section = '';
  }

  // Method to filter the student list based on search query
  get filteredStudentList() {
    return this.studentList.filter(student =>
      student.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}
