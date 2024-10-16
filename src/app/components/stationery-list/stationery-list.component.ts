import { Component } from '@angular/core';

@Component({
  selector: 'app-stationery-list',
  templateUrl: './stationery-list.component.html',
  styleUrls: ['./stationery-list.component.css']
})
export class StationeryListComponent {
  searchTerm: string = '';
  stationeryName: string = '';
  stationeryQuantity: number | null = null;

  stationeryList: { name: string, quantity: number }[] = [
    { name: 'Notebook', quantity: 10 },
    { name: 'Pen', quantity: 50 },
    { name: 'Stapler', quantity: 5 }
  ];

  get filteredStationeryList() {
    return this.stationeryList.filter(item =>
      item.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  addItem() {
    if (this.stationeryName && this.stationeryQuantity !== null) {
      this.stationeryList.push({
        name: this.stationeryName.trim(),
        quantity: this.stationeryQuantity
      });
      this.stationeryName = '';
      this.stationeryQuantity = null;
    }
  }

  removeItem(item: { name: string, quantity: number }) {
    const index = this.stationeryList.indexOf(item);
    if (index !== -1) {
      this.stationeryList.splice(index, 1);
    }
  }

  clearAll() {
    this.stationeryList = [];
  }
}
