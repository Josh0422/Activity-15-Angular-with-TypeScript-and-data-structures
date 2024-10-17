import { Component } from '@angular/core';

@Component({
  selector: 'app-furniture-list',
  templateUrl: './furniture-list.component.html',
  styleUrls: ['./furniture-list.component.css']
})
export class FurnitureListComponent {
  furnitureList: { name: string; description: string }[] = [
    { name: 'Sofa', description: 'Comfortable 3-seater sofa' },
    { name: 'Dining Table', description: 'Wooden dining table for 6' }
  ];

  searchTerm: string = '';

  get filteredFurnitureList() {
    return this.furnitureList.filter(furniture =>
      furniture.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  addFurniture(name: string, description: string) {
    if (name && description) {
      this.furnitureList.push({ name: name.trim(), description: description.trim() });
    }
  }

  removeFurniture(furniture: { name: string; description: string }) {
    const index = this.furnitureList.indexOf(furniture);
    if (index > -1) {
      this.furnitureList.splice(index, 1);
    }
  }

  clearAll() {
    this.furnitureList = [];
  }
}
