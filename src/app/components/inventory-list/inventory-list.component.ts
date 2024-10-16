import { Component } from '@angular/core';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.css'],
})
export class InventoryListComponent {
  searchTerm: string = '';

  // Initial inventory list
  inventoryList: { name: string; quantity: number | null }[] = [
    { name: 'Laptop', quantity: 10 },
    { name: 'Monitor', quantity: 5 },
    { name: 'Keyboard', quantity: 20 },
    { name: 'Mouse', quantity: 15 },
  ];

  // Method to add an item to the inventory
  addItem(name: string, quantity: number | null) {
    if (name && quantity !== null) {
      const newItem = { name: name.trim(), quantity };
      this.inventoryList.push(newItem);
    }
  }

  // Method to remove an item from the inventory
  removeItem(item: { name: string; quantity: number | null }) {
    const index = this.inventoryList.indexOf(item);
    if (index !== -1) {
      this.inventoryList.splice(index, 1);
    }
  }

  // Method to clear all items from the inventory
  clearAll() {
    this.inventoryList = [];
  }

  // Method to filter inventory list based on search term
  filteredInventoryList() {
    return this.inventoryList.filter(item =>
      item.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
