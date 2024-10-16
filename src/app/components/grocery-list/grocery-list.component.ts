import { Component } from '@angular/core';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css']
})
export class GroceryListComponent {
  groceryList: { name: string; quantity: number | null }[] = [
    { name: 'Tomato', quantity: 2 },
    { name: 'Carrot', quantity: 6 },
    { name: 'Onion', quantity: 5},
    { name: 'Potato', quantity: 3},
  ];

  searchTerm: string = ''; // Property for the search term

  // Method to add a new grocery item
  addItem(name: string, quantity: number | null) {
    if (name && quantity !== null) {
      this.groceryList.push({ name: name.trim(), quantity });
    }
  }

  // Method to clear all grocery items
  clearAll() {
    this.groceryList = [];
  }

  // Method to remove a grocery item
  removeItem(item: { name: string; quantity: number | null }) {
    const index = this.groceryList.indexOf(item);
    if (index !== -1) {
      this.groceryList.splice(index, 1);
    }
  }

  // Getter for filtered grocery items
  get filteredGroceryList() {
    return this.groceryList.filter(item =>
      item.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
