import { Component } from '@angular/core';

@Component({
  selector: 'app-lecture-list',
  templateUrl: './lecture-list.component.html',
  styleUrls: ['./lecture-list.component.css']
})
export class LectureListComponent {
  title: string = '';
  date: string = '';
  time: string = '';
  searchTerm: string = '';


  lectureList: { title: string, date: string, time: string }[] = [
    { title: 'Introduction to Angular', date: '2024-10-19', time: '6:00 PM' },
    { title: 'Introduction to TypeScript', date: '2024-10-26', time: '6:00 PM' }
  ];


  addLecture() {
    if (this.title && this.date && this.time) {
      const newLecture = {
        title: this.title.trim(),
        date: this.date.trim(),
        time: this.time.trim()
      };
      this.lectureList.push(newLecture);


      this.title = '';
      this.date = '';
      this.time = '';
    }
  }


  removeLecture(lecture: { title: string, date: string, time: string }) {
    const index = this.lectureList.indexOf(lecture);
    if (index !== -1) {
      this.lectureList.splice(index, 1);
    }
  }


  clearAll() {
    this.lectureList = [];
  }


  get filteredLectureList() {
    return this.lectureList.filter(lecture =>
      lecture.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
