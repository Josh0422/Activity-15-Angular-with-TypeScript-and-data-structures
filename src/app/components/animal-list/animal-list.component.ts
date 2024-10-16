import { Component } from '@angular/core';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent {
  animalName: string = '';
  species: string = '';
  habitat: string = '';


  animalList: { name: string, species: string, habitat: string }[] = [
    { name: 'Lion', species: 'Panthera leo', habitat: 'Savannah' }
  ];


  addAnimal() {
    if (this.animalName && this.species && this.habitat) {
      const newAnimal = {
        name: this.animalName.trim(),
        species: this.species.trim(),
        habitat: this.habitat.trim()
      };
      this.animalList.push(newAnimal);


      this.animalName = '';
      this.species = '';
      this.habitat = '';
    }
  }


  removeAnimal(animal: { name: string, species: string, habitat: string }) {
    const index = this.animalList.indexOf(animal);
    if (index !== -1) {
      this.animalList.splice(index, 1);
    }
  }


  clearAll() {
    this.animalList = [];
  }
}
