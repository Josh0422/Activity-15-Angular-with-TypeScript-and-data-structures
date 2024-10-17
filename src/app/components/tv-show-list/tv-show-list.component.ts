import { Component } from '@angular/core';

@Component({
  selector: 'app-tv-show-list',
  templateUrl: './tv-show-list.component.html',
  styleUrls: ['./tv-show-list.component.css']
})
export class TvShowListComponent {
  tvShowList: { title: string, genre: string }[] = [
    { title: 'Naruto', genre: 'Anime' },
    { title: 'Good Doctor', genre: 'Kdrama' }
  ];

  searchTerm: string = '';

  get filteredTVShowList() {
    return this.tvShowList.filter(show =>
      show.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  addTVShow(title: string, genre: string) {
    if (title && genre) {
      this.tvShowList.push({ title: title.trim(), genre: genre.trim() });
    }
  }

  removeTVShow(show: { title: string, genre: string }) {
    const index = this.tvShowList.indexOf(show);
    if (index > -1) {
      this.tvShowList.splice(index, 1);
    }
  }

  clearAll() {
    this.tvShowList = [];
  }
}
