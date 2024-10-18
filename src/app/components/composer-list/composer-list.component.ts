import { Component } from '@angular/core';

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent {
  composers: string[] = ['Ludwig van Beethoven', 'Wolfgang Amadeus Mozart', 'Johann Sebastian Bach', 'Frédéric Chopin', 'Pyotr Ilyich Tchaikovsky'];

  newComposer: string = '';
  searchQuery: string = '';


  addComposer() {
    if (this.newComposer.trim() && !this.composers.includes(this.newComposer)) {
      this.composers.push(this.newComposer.trim());
      this.newComposer = '';
    }
  }


  removeComposer(composer: string) {
    this.composers = this.composers.filter(c => c !== composer);
  }


  searchComposers() {
    return this.composers.filter(composer => composer.toLowerCase().includes(this.searchQuery.toLowerCase()));
  }


  clearAll() {
    this.composers = [];
  }
}
