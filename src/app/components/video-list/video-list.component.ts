import { Component } from '@angular/core';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent {
  videoList: { title: string, genre: string }[] = [
    { title: 'Spiderman', genre: 'Action' },
    { title: 'The Dark Knight', genre: 'Action' }
  ];

  searchTerm: string = '';

  get filteredVideoList() {
    return this.videoList.filter(video =>
      video.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  addVideo(title: string, genre: string) {
    if (title && genre) {
      this.videoList.push({ title: title.trim(), genre: genre.trim() });
    }
  }

  removeVideo(video: { title: string, genre: string }) {
    const index = this.videoList.indexOf(video);
    if (index > -1) {
      this.videoList.splice(index, 1);
    }
  }

  clearAll() {
    this.videoList = [];
  }
}
