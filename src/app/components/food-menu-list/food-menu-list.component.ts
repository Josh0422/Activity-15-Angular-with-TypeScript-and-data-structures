import { Component } from '@angular/core';

@Component({
  selector: 'app-food-menu-list',
  templateUrl: './food-menu-list.component.html',
  styleUrl: './food-menu-list.component.css'
})
export class FoodMenuListComponent {
  name: string = '';
  category: string = '';
  price: string = '';
  searchTerm: string = '';


  foodList: { name: string, category: string, price: string }[] = [
    { name: 'Pizza', category: 'Main Course', price: '150.00' }
  ];


  addItem() {
    if (this.name && this.category && this.price) {
      const newFoodItem = {
        name: this.name.trim(),
        category: this.category.trim(),
        price: this.price.trim()
      };
      this.foodList.push(newFoodItem);


      this.name = '';
      this.category = '';
      this.price = '';
    }
  }


  removeItem(foodItem: { name: string, category: string, price: string }) {
    const index = this.foodList.indexOf(foodItem);
    if (index !== -1) {
      this.foodList.splice(index, 1);
    }
  }


  clearAll() {
    this.foodList = [];
  }


  get filteredFoodList() {
    return this.foodList.filter(item =>
      item.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
