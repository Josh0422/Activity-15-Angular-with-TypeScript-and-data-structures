import { Component } from '@angular/core';

@Component({
  selector: 'app-classroom-list',
  templateUrl: './classroom-list.component.html',
  styleUrls: ['./classroom-list.component.css']
})
export class ClassroomListComponent {
  name: string = '';
  course: string = '';
  section: string = '';
  searchTerm: string = '';


  studentList: { name: string; course: string; section: string }[] = [
    { name: 'John Ruzzel Bacia', course: 'BSIT', section: '4A' },
    { name: 'Maricar Rico', course: 'BSIT', section: '4A' },
    { name: 'Anne cherry Chico', course: 'BSIT', section: '4B' },
    { name: 'Jane Smith', course: 'BSIT', section: '4B' }
  ];


  get filteredStudentList() {
    return this.studentList.filter(student =>
      student.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }


  addItem() {
    if (this.name && this.course && this.section) {
      const newStudent = {
        name: this.name.trim(),
        course: this.course.trim(),
        section: this.section.trim()
      };
      this.studentList.push(newStudent);


      this.name = '';
      this.course = '';
      this.section = '';
    }
  }


  removeItem(student: { name: string; course: string; section: string }) {
    const index = this.studentList.indexOf(student);
    if (index !== -1) {
      this.studentList.splice(index, 1);
    }
  }


  clearAll() {
    this.studentList = [];
  }
}
