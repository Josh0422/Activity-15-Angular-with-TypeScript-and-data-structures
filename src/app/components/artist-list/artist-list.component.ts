import { Component } from '@angular/core';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.css']
})
export class ArtistListComponent {
  artists: string[] = ['Hev Abi ', 'Illest Morena', 'Denise Julia', 'Dionela '];

  newArtist: string = '';
  searchQuery: string = '';

  // Add a new artist
  addArtist() {
    if (this.newArtist.trim() && !this.artists.includes(this.newArtist)) {
      this.artists.push(this.newArtist.trim());
      this.newArtist = '';
    }
  }

  // Remove an artist from the list
  removeArtist(artist: string) {
    this.artists = this.artists.filter(a => a !== artist);
  }

  // Search for artists
  searchArtists() {
    return this.artists.filter(artist => artist.toLowerCase().includes(this.searchQuery.toLowerCase()));
  }

  // Clear all artists
  clearAll() {
    this.artists = [];
  }
}
