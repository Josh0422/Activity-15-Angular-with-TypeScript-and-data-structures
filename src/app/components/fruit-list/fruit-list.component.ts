import { Component } from '@angular/core';

@Component({
  selector: 'app-fruit-list',
  templateUrl: './fruit-list.component.html',
  styleUrl: './fruit-list.component.css'
})
export class FruitListComponent {
  fruitName: string = '';
  searchTerm: string = '';

  // Initial fruit list
  fruitList: { name: string }[] = [
    { name: 'Apple' },
    { name: 'Banana' },
    { name: 'Pineapple' },
    { name: 'Grapes' }
  ];

  // Filtered fruit list based on search term
  filteredFruitList = [...this.fruitList];

  // Method to add a fruit to the list
  addFruit() {
    if (this.fruitName) {
      const newFruit = { name: this.fruitName.trim() };
      this.fruitList.push(newFruit);
      this.filteredFruitList.push(newFruit); // Also add to filtered list

      // Clear input field after adding
      this.fruitName = '';
    }
  }

  // Method to remove a fruit from the list
  removeFruit(fruit: { name: string }) {
    const index = this.fruitList.indexOf(fruit);
    if (index !== -1) {
      this.fruitList.splice(index, 1);
      this.filteredFruitList.splice(this.filteredFruitList.indexOf(fruit), 1); // Remove from filtered list
    }
  }

  // Method to filter fruits based on the search term
  filterFruits() {
    this.filteredFruitList = this.fruitList.filter(fruit =>
      fruit.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  // Method to clear all fruits from the list
  clearAll() {
    this.fruitList = [];
    this.filteredFruitList = [];
  }
}
