import { Component } from '@angular/core';

@Component({
  selector: 'app-car-model-list',
  templateUrl: './car-model-list.component.html',
  styleUrls: ['./car-model-list.component.css'] // Corrected styleUrls key
})
export class CarModelListComponent {
  carModelList: string[] = ['Toyota Camry', 'Honda Civic', 'Ford Mustang'];
  filteredCarModelList: string[] = [...this.carModelList]; // Filtered list initialized
  name: string = ''; // For adding a new car model
  searchTerm: string = ''; // For searching car models

  // Add a new car model to the list
  addCarModel() {
    const trimmedName = this.name.trim();
    if (trimmedName && !this.carModelList.includes(trimmedName)) {
      this.carModelList.push(trimmedName);
      this.filteredCarModelList = [...this.carModelList]; // Update the filtered list
      this.name = ''; // Clear input field after adding
    }
  }

  // Remove a car model from the list by index
  removeCarModel(index: number) {
    this.carModelList.splice(index, 1);
    this.filteredCarModelList = [...this.carModelList]; // Update the filtered list
  }

  // Clear all car models from the list
  clearAll() {
    this.carModelList = [];
    this.filteredCarModelList = [];
  }

  // Search and filter the car models
  searchCarModel() {
    const term = this.searchTerm.trim().toLowerCase();
    if (term) {
      this.filteredCarModelList = this.carModelList.filter(model =>
        model.toLowerCase().includes(term)
      );
    } else {
      this.filteredCarModelList = [...this.carModelList]; // Reset if search term is empty
    }
  }
}
