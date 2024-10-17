import { Component } from '@angular/core';

@Component({
  selector: 'app-computer-hardware-list',
  templateUrl: './computer-hardware-list.component.html',
  styleUrls: ['./computer-hardware-list.component.css'] // Correct plural form
})
export class ComputerHardwareListComponent {
  // Consistent variable naming
  computerHardwareList: { name: string; specs: string }[] = [
    { name: 'CPU', specs: 'Intel Core i7' },
    { name: 'GPU', specs: 'NVIDIA GTX 3080' }
  ];

  searchTerm: string = '';

  // Filter the list based on the search term
  get filteredHardwareList() {
    return this.computerHardwareList.filter(component =>
      component.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  // Add a new component to the list
  addComponent(name: string, specs: string) {
    if (name && specs) {
      this.computerHardwareList.push({ name: name.trim(), specs: specs.trim() });
    }
  }

  // Remove a component from the list
  removeComponent(component: { name: string; specs: string }) {
    const index = this.computerHardwareList.indexOf(component);
    if (index > -1) {
      this.computerHardwareList.splice(index, 1);
    }
  }

  // Clear the entire list
  clearAll() {
    this.computerHardwareList = [];
  }
}
