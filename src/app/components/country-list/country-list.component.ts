import { Component } from '@angular/core';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent {
  country: string = '';
  continent: string = '';
  searchQuery: string = '';


  countryList: { country: string, continent: string }[] = [
    { country: 'Canada', continent: 'North America' },
    { country: 'Brazil', continent: 'South America' },
    { country: 'China', continent: 'Asia' }
  ];

  filteredList = [...this.countryList]; // Holds filtered results for search


  addCountry() {
    if (this.country && this.continent) {
      const newCountry = {
        country: this.country.trim(),
        continent: this.continent.trim()
      };
      this.countryList.push(newCountry);
      this.filteredList = [...this.countryList]; // Update filtered list


      this.country = '';
      this.continent = '';
    }
  }


  removeCountry(country: { country: string, continent: string }) {
    const index = this.countryList.indexOf(country);
    if (index !== -1) {
      this.countryList.splice(index, 1);
      this.filteredList = [...this.countryList]; // Update filtered list
    }
  }


  searchCountry() {
    if (this.searchQuery) {
      this.filteredList = this.countryList.filter(item =>
        item.country.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        item.continent.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    } else {
      this.filteredList = [...this.countryList];
    }
  }


  clearAll() {
    this.countryList = [];
    this.filteredList = [];
  }
}
