import { Component } from '@angular/core';


interface Meal {
  day: string;
  mealName: string;
}

@Component({
  selector: 'app-meal-plan-list',
  templateUrl: './meal-plan-list.component.html',
  styleUrls: ['./meal-plan-list.component.css']
})
export class MealPlanListComponent {

  mealPlan: Meal[] = [
    { day: 'Monday', mealName: 'Adobo' },
    { day: 'Tuesday', mealName: 'Sinigang' },
    { day: 'Wednesday', mealName: 'Pancit' }
  ];


  newMealDay: string = '';
  newMealName: string = '';


  searchKeyword: string = '';
  searchResults: Meal[] = this.mealPlan;


  daysOfWeek: string[] = [
    'Monday', 'Tuesday', 'Wednesday',
    'Thursday', 'Friday', 'Saturday', 'Sunday',
  ];


  addMeal(): void {
    if (this.newMealDay && this.newMealName) {
      const newMeal: Meal = {
        day: this.newMealDay,
        mealName: this.newMealName.trim()
      };
      this.mealPlan.push(newMeal);
      this.clearFields();
      this.searchMeal();
    }
  }


  clearFields(): void {
    this.newMealDay = '';
    this.newMealName = '';
  }


  removeMeal(index: number): void {
    this.mealPlan.splice(index, 1);
    this.searchMeal();
  }


  clearAllMeals(): void {
    this.mealPlan = [];
    this.searchResults = [];
  }


  searchMeal(): void {
    if (this.searchKeyword.trim()) {
      const keyword = this.searchKeyword.toLowerCase();
      this.searchResults = this.mealPlan.filter(meal =>
        meal.day.toLowerCase().includes(keyword) ||
        meal.mealName.toLowerCase().includes(keyword)
      );
    } else {
      this.searchResults = this.mealPlan;
    }
  }


  clearSearch(): void {
    this.searchKeyword = '';
    this.searchResults = this.mealPlan;
  }
}
