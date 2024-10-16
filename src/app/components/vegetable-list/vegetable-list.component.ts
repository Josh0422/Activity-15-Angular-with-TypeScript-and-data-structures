import { Component } from '@angular/core';

@Component({
  selector: 'app-vegetable-list',
  templateUrl: './vegetable-list.component.html',
  styleUrls: ['./vegetable-list.component.css']
})
export class VegetableListComponent {
  name: string = '';
  type: string = '';
  searchTerm: string = '';  // Declare searchTerm


  vegetableList: { name: string, type: string }[] = [
    { name: 'Tomato', type: 'Fruit Vegetable' },
    { name: 'Carrot', type: 'Root Vegetable' }
  ];


  addVegetable() {
    if (this.name && this.type) {
      const newVegetable = {
        name: this.name.trim(),
        type: this.type.trim()
      };
      this.vegetableList.push(newVegetable);


      this.name = '';
      this.type = '';
    }
  }


  removeVegetable(vegetable: { name: string, type: string }) {
    const index = this.vegetableList.indexOf(vegetable);
    if (index !== -1) {
      this.vegetableList.splice(index, 1);
    }
  }


  clearAll() {
    this.vegetableList = [];
  }


  searchVegetable(searchTerm: string) {
    return this.vegetableList.filter(veg =>
      veg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      veg.type.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
