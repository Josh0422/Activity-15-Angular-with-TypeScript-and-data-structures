import { Component } from '@angular/core';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css']
})
export class SubjectListComponent {
  subjectName: string = '';
  subjectCode: string = '';
  semester: string = '';
  searchQuery: string = '';

  // Initial subject list
  subjectList: { name: string, code: string, semester: string }[] = [
    { name: 'Capstone 1', code: 'CAP101', semester: '1st' },
    { name: 'System Integration and Architecture 2', code: 'SIA102', semester: '1st' }
  ];

  filteredSubjectList = [...this.subjectList];  // Clone of the subjectList for search

  // Method to add a subject to the list
  addSubject() {
    if (this.subjectName && this.subjectCode && this.semester) {
      const newSubject = {
        name: this.subjectName.trim(),
        code: this.subjectCode.trim(),
        semester: this.semester.trim()
      };
      this.subjectList.push(newSubject);
      this.filteredSubjectList = [...this.subjectList];  // Update the filtered list

      // Clear input fields after adding
      this.subjectName = '';
      this.subjectCode = '';
      this.semester = '';
    }
  }

  // Method to remove a subject from the list
  removeSubject(subject: { name: string, code: string, semester: string }) {
    const index = this.subjectList.indexOf(subject);
    if (index !== -1) {
      this.subjectList.splice(index, 1);
      this.filteredSubjectList = [...this.subjectList];  // Update filtered list after removal
    }
  }

  // Method to search through the subjects
  searchSubjects() {
    if (this.searchQuery) {
      const lowerSearch = this.searchQuery.toLowerCase();
      this.filteredSubjectList = this.subjectList.filter(subject =>
        subject.name.toLowerCase().includes(lowerSearch) ||
        subject.code.toLowerCase().includes(lowerSearch) ||
        subject.semester.toLowerCase().includes(lowerSearch)
      );
    } else {
      this.filteredSubjectList = [...this.subjectList];  // Reset list when search is cleared
    }
  }

  // Method to clear all subjects
  clearAll() {
    this.subjectList = [];
    this.filteredSubjectList = [];
  }
}
