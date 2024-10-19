import { Component } from '@angular/core';

@Component({
  selector: 'app-library-list',
  templateUrl: './library-list.component.html',
  styleUrls: ['./library-list.component.css'],
})
export class LibraryListComponent {
  libraries: string[] = [
    'Mathematics',
    'Science ',
    'History ',
    'Art ',
    'Technology Library'
  ];
  newLibrary: string = '';
  searchTerm: string = '';


  addLibrary() {
    if (this.newLibrary.trim()) {
      this.libraries.push(this.newLibrary.trim());
      this.newLibrary = '';
    }
  }


  removeLibrary(index: number) {
    this.libraries.splice(index, 1);
  }

  // Method to clear all libraries
  clearLibraries() {
    this.libraries = [];
  }


  get filteredLibraries() {
    return this.libraries.filter(library =>
      library.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
