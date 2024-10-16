import { Component } from '@angular/core';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent {
  gameTitle: string = '';
  gameGenre: string = '';
  gamePlatform: string = '';
  searchTerm: string = '';

  // Initial game list
  gameList: { title: string; genre: string; platform: string }[] = [
    { title: 'Mobile Legend', genre: 'Multiplayer Online Battle Arena (MOBA)', platform: 'Android or iOS' },
    { title: 'Call of Duty', genre: 'First-Person Shooter (FPS)', platform: 'PC or Mobile' },
    { title: 'Blood Strike', genre: 'First-Person Shooter (FPS)', platform: 'Mobile' }
  ];

  // Filtered games based on the search term
  filteredGames = [...this.gameList];

  // Method to add a game to the list
  addGame() {
    if (this.gameTitle && this.gameGenre && this.gamePlatform) {
      const newGame = {
        title: this.gameTitle.trim(),
        genre: this.gameGenre.trim(),
        platform: this.gamePlatform.trim()
      };
      this.gameList.push(newGame);
      this.filteredGames.push(newGame); // Also add to filtered list

      // Clear input fields after adding
      this.gameTitle = '';
      this.gameGenre = '';
      this.gamePlatform = '';
    }
  }

  // Method to remove a game from the list
  removeGame(game: { title: string; genre: string; platform: string }) {
    const index = this.gameList.indexOf(game);
    if (index !== -1) {
      this.gameList.splice(index, 1);
      this.filteredGames.splice(index, 1); // Also remove from filtered list
    }
  }

  // Method to filter games based on the search term
  filterGames() {
    this.filteredGames = this.gameList.filter(game =>
      game.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      game.genre.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      game.platform.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  // Method to clear all games from the list
  clearAll() {
    this.gameList = [];
    this.filteredGames = [];
  }
}
