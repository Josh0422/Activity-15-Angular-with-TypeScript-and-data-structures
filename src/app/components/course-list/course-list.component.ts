import { Component } from '@angular/core';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent {
  courseName: string = '';
  courseCode: string = '';
  facilitator: string = '';
  searchTerm: string = '';

  // Initial course list
  courseList: { courseName: string, courseCode: string, facilitator: string }[] = [
    { courseName: 'Bachelor of Science in Information Technology.',  courseCode: 'BSIT', facilitator: 'MR. Jazz Cayubit' }
  ];

  // Displayed list, filtered based on search term
  filteredCourses = [...this.courseList];

  // Method to add a course to the list
  addCourse() {
    if (this.courseName && this.courseCode && this.facilitator) {
      const newCourse = {
        courseName: this.courseName.trim(),
        courseCode: this.courseCode.trim(),
        facilitator: this.facilitator.trim()
      };
      this.courseList.push(newCourse);
      this.filteredCourses = [...this.courseList];

      // Clear input fields after adding
      this.courseName = '';
      this.courseCode = '';
      this.facilitator = '';
    }
  }

  // Method to remove a course from the list
  removeCourse(course: { courseName: string, courseCode: string, facilitator: string }) {
    const index = this.courseList.indexOf(course);
    if (index !== -1) {
      this.courseList.splice(index, 1);
      this.filteredCourses = [...this.courseList];
    }
  }

  // Method to clear all courses
  clearAll() {
    this.courseList = [];
    this.filteredCourses = [];
  }

  // Method to search for courses
  searchCourses() {
    this.filteredCourses = this.courseList.filter(course =>
        course.courseName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        course.courseCode.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        course.facilitator.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}

