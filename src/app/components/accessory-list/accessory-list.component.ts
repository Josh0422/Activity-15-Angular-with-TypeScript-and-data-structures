// accessory-list.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-accessory-list',
  templateUrl: './accessory-list.component.html',
  styleUrls: ['./accessory-list.component.css']
})
export class AccessoryListComponent {
  accessories = [
    { id: 1, name: 'Wireless Charger', type: 'Charger', price: 150.00 },
    { id: 2, name: 'Bluetooth Earphones', type: 'Earphones', price: 150.00 },
    { id: 3, name: 'Phone Case', type: 'Case', price: 100.00 }
  ];

  searchQuery: string = '';

  addAccessory(name: string, type: string, price: number) {
    const newAccessory = {
      id: this.accessories.length + 1,
      name: name,
      type: type,
      price: price
    };
    this.accessories.push(newAccessory);
  }

  removeAccessory(id: number) {
    this.accessories = this.accessories.filter(item => item.id !== id);
  }

  searchAccessory() {
    if (this.searchQuery) {
      this.accessories = this.accessories.filter(item =>
        item.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        item.type.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  }

  clearAll() {
    this.accessories = [];
  }
}
