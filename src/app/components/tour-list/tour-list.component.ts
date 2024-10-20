import { Component } from '@angular/core';

// Interface for each tour date
interface TourDate {
  city: string;
  date: string; // Date in string format
}

@Component({
  selector: 'app-tour-list',
  templateUrl: './tour-list.component.html',
  styleUrls: ['./tour-list.component.css']
})
export class TourListComponent {
  tourList: TourDate[] = [
    { city: 'Caloocan City', date: '2024-11-20' },
    { city: 'Batangas', date: '2024-12-05' },
    { city: 'Quezon city', date: '2024-12-15' }
  ];

  newCity: string = '';
  newDate: string = '';
  searchKeyword: string = '';


  addTourDate(): void {
    if (this.newCity.trim() && this.newDate.trim()) {
      const newTour: TourDate = {
        city: this.newCity.trim(),
        date: this.newDate
      };
      this.tourList.push(newTour);
      this.clearFields();
    }
  }


  clearFields(): void {
    this.newCity = '';
    this.newDate = '';
  }


  removeTourDate(index: number): void {
    this.tourList.splice(index, 1);
  }


  searchTourDate(keyword: string): TourDate[] {
    return this.tourList.filter(tour =>
      tour.city.toLowerCase().includes(keyword.toLowerCase())
    );
  }


  getFilteredTourDates(): TourDate[] {
    if (this.searchKeyword.trim()) {
      return this.searchTourDate(this.searchKeyword);
    }
    return this.tourList;
  }
}
