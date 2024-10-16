import { Component } from '@angular/core';

@Component({
  selector: 'app-music-playlist',
  templateUrl: './music-playlist.component.html',
  styleUrls: ['./music-playlist.component.css']
})
export class MusicPlaylistComponent {
  title: string = '';
  artist: string = '';
  searchQuery: string = '';


  playlist: { title: string, artist: string}[] = [
    { title: 'Ikaw at ako', artist: 'Tj Monterde'},
    { title: 'Simpleng tulad mo', artist: 'Daniel Padilla'},
    { title: 'Kahit di mo alam', artist: 'December Avenue'}
  ];


  addSong() {
    if (this.title && this.artist) {
      const newSong = {
        title: this.title.trim(),
        artist: this.artist.trim(),

      };
      this.playlist.push(newSong);


      this.title = '';
      this.artist = '';
    }
  }


  removeSong(song: { title: string, artist: string}) {
    const index = this.playlist.indexOf(song);
    if (index !== -1) {
      this.playlist.splice(index, 1);
    }
  }


  get filteredPlaylist() {
    return this.playlist.filter(song =>
      song.title.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  clearAll() {
    this.playlist = [];
  }
}
