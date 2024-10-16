import { Component } from '@angular/core';

@Component({
  selector: 'app-sports-list',
  templateUrl: './sports-list.component.html',
  styleUrls: ['./sports-list.component.css']
})
export class SportsListComponent {
  sportName: string = '';
  searchTerm: string = '';

  // Initial sports list
  sportsList: string[] = [
    'Soccer',
    'Basketball',
    'Tennis',
    'Cricket',
    'Baseball'
  ];

  filteredSports: string[] = [...this.sportsList]; // Start with all sports

  // Method to add a sport to the list
  addSport() {
    if (this.sportName) {
      this.sportsList.push(this.sportName.trim());
      this.filteredSports.push(this.sportName.trim());
      this.sportName = ''; // Clear input field
    }
  }

  // Method to remove a sport from the list
  removeSport(sport: string) {
    const index = this.sportsList.indexOf(sport);
    if (index !== -1) {
      this.sportsList.splice(index, 1);
      this.filteredSports.splice(index, 1); // Remove from filtered list too
    }
  }

  // Method to clear all sports
  clearAll() {
    this.sportsList = [];
    this.filteredSports = [];
  }

  // Method to filter sports based on search term
  filterSports() {
    const lowerCaseTerm = this.searchTerm.toLowerCase();
    this.filteredSports = this.sportsList.filter(sport =>
      sport.toLowerCase().includes(lowerCaseTerm)
    );
  }
}
