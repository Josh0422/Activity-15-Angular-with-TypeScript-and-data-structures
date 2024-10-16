import { Component } from '@angular/core';

@Component({
  selector: 'app-flower-list',
  templateUrl: './flower-list.component.html',
  styleUrls: ['./flower-list.component.css']
})
export class FlowerListComponent {
  flowerName: string = '';
  flowerType: string = '';
  searchTerm: string = '';


  flowerList: { name: string, type: string }[] = [
    { name: 'Rose', type: 'Romantic' },
    { name: 'Lily', type: 'Elegant' }
  ];


  addFlower() {
    if (this.flowerName && this.flowerType) {
      this.flowerList.push({ name: this.flowerName.trim(), type: this.flowerType.trim() });
      this.flowerName = '';
      this.flowerType = '';
    }
  }


  removeFlower(flower: { name: string, type: string }) {
    const index = this.flowerList.indexOf(flower);
    if (index !== -1) {
      this.flowerList.splice(index, 1);
    }
  }


  clearAll() {
    this.flowerList = [];
  }


  get filteredFlowerList() {
    return this.flowerList.filter(flower => flower.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
  }
}
