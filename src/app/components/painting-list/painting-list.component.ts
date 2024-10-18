import { Component } from '@angular/core';

@Component({
  selector: 'app-painting-list',
  templateUrl: './painting-list.component.html',
  styleUrls: ['./painting-list.component.css']
})
export class PaintingListComponent {
  paintings: string[] = ['Mona Lisa', 'The Starry Night', 'The Persistence of Memory', 'The Scream', 'Girl with a Pearl Earring'];

  newPainting: string = '';
  searchQuery: string = '';


  addPainting() {
    if (this.newPainting.trim() && !this.paintings.includes(this.newPainting)) {
      this.paintings.push(this.newPainting.trim());
      this.newPainting = '';
    }
  }


  removePainting(painting: string) {
    this.paintings = this.paintings.filter(p => p !== painting);
  }

  searchPaintings() {
    return this.paintings.filter(painting => painting.toLowerCase().includes(this.searchQuery.toLowerCase()));
  }


  clearAll() {
    this.paintings = [];
  }
}
