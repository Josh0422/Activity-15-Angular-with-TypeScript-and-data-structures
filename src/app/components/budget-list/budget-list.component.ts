import { Component } from '@angular/core';

// Interface para sa bawat budget item
interface BudgetItem {
  name: string;      // Pangalan ng budget item
  category: string;  // Kategorya ng budget item
  amount: number;    // Halaga ng budget item
}

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.css']
})
export class BudgetListComponent {
  // Listahan ng mga budget items
  budgetList: BudgetItem[] = [
    { name: 'Materials', category: 'Construction', amount: 5000 },
    { name: 'Labor', category: 'Construction', amount: 3000 },
    { name: 'Design', category: 'Planning', amount: 1500 }
  ];

  // Temporaryong variable para sa bagong budget item
  newBudgetName: string = '';
  newBudgetCategory: string = '';
  newBudgetAmount: number | null = null;

  // Search-related variables
  searchKeyword: string = '';
  searchResults: BudgetItem[] = this.budgetList;

  // Method para magdagdag ng bagong budget item
  addBudgetItem(): void {
    if (this.newBudgetName && this.newBudgetCategory && this.newBudgetAmount !== null) {
      const newBudgetItem: BudgetItem = {
        name: this.newBudgetName.trim(),
        category: this.newBudgetCategory.trim(),
        amount: this.newBudgetAmount
      };
      this.budgetList.push(newBudgetItem); // Idagdag sa array
      this.clearFields(); // I-clear ang input fields
      this.searchBudgetItem(); // Update search results
    }
  }

  // Method para i-clear ang mga input fields
  clearFields(): void {
    this.newBudgetName = '';
    this.newBudgetCategory = '';
    this.newBudgetAmount = null;
  }

  // Method para alisin ang budget item batay sa index
  removeBudgetItem(index: number): void {
    this.budgetList.splice(index, 1); // Tanggalin ang item sa array
    this.searchBudgetItem(); // Update search results after removal
  }

  // Method para i-clear lahat ng budget items
  clearAllBudgetItems(): void {
    this.budgetList = [];
    this.searchResults = [];
  }

  // Method para maghanap ng budget items batay sa keyword
  searchBudgetItem(): void {
    if (this.searchKeyword.trim()) {
      const keyword = this.searchKeyword.toLowerCase();
      this.searchResults = this.budgetList.filter(item =>
        item.name.toLowerCase().includes(keyword) ||
        item.category.toLowerCase().includes(keyword)
      );
    } else {
      this.searchResults = this.budgetList; // Ipakita lahat kung walang search keyword
    }
  }

  // I-clear ang search bar
  clearSearch(): void {
    this.searchKeyword = '';
    this.searchResults = this.budgetList;
  }
}
