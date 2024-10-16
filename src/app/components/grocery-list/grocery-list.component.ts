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

  searchTerm: string = '';


  addItem(name: string, quantity: number | null) {
    if (name && quantity !== null) {
      this.groceryList.push({ name: name.trim(), quantity });
    }
  }


  clearAll() {
    this.groceryList = [];
  }


  removeItem(item: { name: string; quantity: number | null }) {
    const index = this.groceryList.indexOf(item);
    if (index !== -1) {
      this.groceryList.splice(index, 1);
    }
  }


  get filteredGroceryList() {
    return this.groceryList.filter(item =>
      item.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
