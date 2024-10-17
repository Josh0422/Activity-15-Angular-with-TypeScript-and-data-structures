import { Component } from '@angular/core';

@Component({
  selector: 'app-laptop-specifications-list',
  templateUrl: './laptop-specifications-list.component.html',
  styleUrls: ['./laptop-specifications-list.component.css']
})
export class LaptopSpecificationsListComponent {
  searchTerm: string = '';

  laptopList: { name: string, processor: string, ram: number }[] = [
    { name: 'Dell XPS 13', processor: 'Intel i7', ram: 16 },
    { name: 'MacBook Pro', processor: 'Apple M1', ram: 8 }
  ];

  get filteredLaptopList() {
    return this.laptopList.filter(laptop =>
      laptop.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  addLaptop(name: string, processor: string, ram: number) {
    if (name && processor && ram) {
      this.laptopList.push({ name, processor, ram });
    }
  }

  removeLaptop(laptop: { name: string, processor: string, ram: number }) {
    const index = this.laptopList.indexOf(laptop);
    if (index !== -1) {
      this.laptopList.splice(index, 1);
    }
  }

  clearAll() {
    this.laptopList = [];
  }
}
