import { Component } from '@angular/core';

@Component({
  selector: 'app-software-list',
  templateUrl: './software-list.component.html',
  styleUrls: ['./software-list.component.css']
})
export class SoftwareListComponent {
  softwareName: string = '';
  publisher: string = '';
  searchQuery: string = '';

  // Initial software list
  softwareList: { name: string; publisher: string }[] = [
    { name: 'Visual Studio Code', publisher: 'Microsoft' },
    { name: 'Chrome', publisher: 'Google' },
  ];

  // Filtered software list for search functionality
  filteredSoftwareList = [...this.softwareList];

  // Method to add software to the list
  addSoftware() {
    if (this.softwareName &&this.publisher) {
      const newSoftware = {
        name: this.softwareName.trim(),
        publisher: this.publisher.trim()
      };
      this.softwareList.push(newSoftware);
      this.filteredSoftwareList.push(newSoftware);


      this.softwareName = '';
      this.publisher = '';
    }
  }


  removeSoftware(software: { name: string; publisher: string }) {
    const index = this.softwareList.indexOf(software);
    if (index !== -1) {
      this.softwareList.splice(index, 1);
      this.filteredSoftwareList.splice(index, 1); // Update the filtered list
    }
  }

  // Method to filter the software list based on the search query
  filterSoftware() {
    this.filteredSoftwareList = this.softwareList.filter(software =>
      software.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  // Method to clear the search input and show all software
  clearSearch() {
    this.searchQuery = '';
    this.filteredSoftwareList = [...this.softwareList];
  }

  // Method to clear all software from the list
  clearAll() {
    this.softwareList = [];
    this.filteredSoftwareList = [];
  }
}
