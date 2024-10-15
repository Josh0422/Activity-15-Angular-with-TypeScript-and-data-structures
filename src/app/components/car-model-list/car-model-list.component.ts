import { Component } from '@angular/core';

@Component({
  selector: 'app-car-model-list',
  templateUrl: './car-model-list.component.html',
  styleUrls: ['./car-model-list.component.css']
})
export class CarModelListComponent {
  modelName: string = '';
  brand: string = '';
  year: string = '';
  searchQuery: string = '';

  // Initial car model list
  carModelList: { modelName: string, brand: string, year: string }[] = [
    { modelName: 'Civic', brand: 'Honda', year: '2022' }
  ];

  // Method to add a car model to the list
  addCarModel() {
    if (this.modelName && this.brand && this.year) {
      const newCarModel = {
        modelName: this.modelName.trim(),
        brand: this.brand.trim(),
        year: this.year.trim()
      };
      this.carModelList.push(newCarModel);

      // Clear input fields after adding
      this.modelName = '';
      this.brand = '';
      this.year = '';
    }
  }

  // Method to remove a car model from the list
  removeCarModel(carModel: { modelName: string, brand: string, year: string }) {
    const index = this.carModelList.indexOf(carModel);
    if (index !== -1) {
      this.carModelList.splice(index, 1);
    }
  }

  // Method to search car models by name
  searchCarModel() {
    return this.carModelList.filter(carModel =>
      carModel.modelName.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  // Method to clear all car models from the list
  clearAllCarModels() {
    this.carModelList = [];
  }
}
