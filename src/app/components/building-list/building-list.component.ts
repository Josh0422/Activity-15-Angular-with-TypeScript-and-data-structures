import { Component } from '@angular/core';

@Component({
  selector: 'app-building-list',
  templateUrl: './building-list.component.html',
  styleUrls: ['./building-list.component.css']
})
export class BuildingListComponent {
  buildings: { location: string, name: string }[] = [
    { location: 'Quezon City', name: 'Sm fairview' },
    { location: 'Pasay', name: 'Wiston Hotel' },

  ];

  newLocation: string = '';
  newBuilding: string = '';
  searchQuery: string = '';


  addBuilding() {
    if (this.newLocation.trim() && this.newBuilding.trim()) {
      this.buildings.push({
        location: this.newLocation.trim(),
        name: this.newBuilding.trim()
      });
      this.newLocation = '';
      this.newBuilding = '';
    }
  }


  removeBuilding(building: { location: string, name: string }) {
    this.buildings = this.buildings.filter(b => b !== building);
  }


  searchBuildings() {
    return this.buildings.filter(building =>
      building.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      building.location.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }


  clearAll() {
    this.buildings = [];
  }
}
