import { Component } from '@angular/core';

@Component({
  selector: 'app-computer-hardware-list',
  templateUrl: './computer-hardware-list.component.html',
  styleUrls: ['./computer-hardware-list.component.css']
})
export class ComputerHardwareListComponent {

  computerHardwareList: { name: string; specs: string }[] = [
    { name: 'CPU', specs: 'Intel Core i7' },
    { name: 'GPU', specs: 'NVIDIA GTX 3080' }
  ];

  searchTerm: string = '';


  get filteredHardwareList() {
    return this.computerHardwareList.filter(component =>
      component.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }


  addComponent(name: string, specs: string) {
    if (name && specs) {
      this.computerHardwareList.push({ name: name.trim(), specs: specs.trim() });
    }
  }


  removeComponent(component: { name: string; specs: string }) {
    const index = this.computerHardwareList.indexOf(component);
    if (index > -1) {
      this.computerHardwareList.splice(index, 1);
    }
  }


  clearAll() {
    this.computerHardwareList = [];
  }
}
