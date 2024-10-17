import { Component } from '@angular/core';

@Component({
  selector: 'app-laptop-list',
  templateUrl: './laptop-list.component.html',
  styleUrls: ['./laptop-list.component.css']
})
export class LaptopListComponent {
  laptopModel: string = '';
  brand: string = '';
  price: number | null = null;
  searchTerm: string = '';


  laptopList: { model: string; brand: string; price: number }[] = [
    { model: 'MacBook Air', brand: 'Apple', price: 45000 },
    { model: 'ThinkPad X1 Carbon', brand: 'Lenovo', price: 30000 },
  ];


  addLaptop() {
    if (this.laptopModel && this.brand && this.price !== null) {
      const newLaptop = {
        model: this.laptopModel.trim(),
        brand: this.brand.trim(),
        price: this.price
      };
      this.laptopList.push(newLaptop);


      this.laptopModel = '';
      this.brand = '';
      this.price = null;
    }
  }

  // Remove a laptop from the list
  removeLaptop(laptop: { model: string; brand: string; price: number }) {
    const index = this.laptopList.indexOf(laptop);
    if (index !== -1) {
      this.laptopList.splice(index, 1);
    }
  }

  // Clear all laptops from the list
  clearAll() {
    this.laptopList = [];
  }

  // Filter laptops based on search term
  filteredLaptopList() {
    return this.laptopList.filter(laptop =>
      laptop.model.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      laptop.brand.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
