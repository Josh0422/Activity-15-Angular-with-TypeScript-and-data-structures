import { Component } from '@angular/core';

@Component({
  selector: 'app-destination-list',
  templateUrl: './destination-list.component.html',
  styleUrls: ['./destination-list.component.css']
})
export class DestinationListComponent {
  destinationName: string = '';
  searchTerm: string = '';
  destinationList: { name: string }[] = [
    { name: 'Paris' },
    { name: 'New York' },
    { name: 'Tokyo' }
  ];

  get filteredDestinationList() {
    return this.destinationList.filter(destination =>
      destination.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  addDestination() {
    if (this.destinationName.trim()) {
      this.destinationList.push({ name: this.destinationName.trim() });
      this.destinationName = '';  // Clear input after adding
    }
  }

  removeDestination(destination: { name: string }) {
    const index = this.destinationList.indexOf(destination);
    if (index !== -1) {
      this.destinationList.splice(index, 1);
    }
  }

  clearAll() {
    this.destinationList = [];
  }
}
