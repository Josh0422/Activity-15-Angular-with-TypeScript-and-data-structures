import { Component } from '@angular/core';

// Define a Podcast Episode type with title and episode number
interface PodcastEpisode {
  title: string;
  episodeNumber: number;
}

@Component({
  selector: 'app-podcast-list',
  templateUrl: './podcast-list.component.html',
  styleUrls: ['./podcast-list.component.css']
})
export class PodcastListComponent {
  // Data structure to store the list of podcast episodes
  podcastEpisodes: PodcastEpisode[] = [];

  // Temporary variables to hold the new podcast episode title and number
  newEpisodeTitle: string = '';
  newEpisodeNumber: number | null = null;

  // Method to add a new episode to the list
  addEpisode(): void {
    if (this.newEpisodeTitle.trim() && this.newEpisodeNumber !== null) {
      const newEpisode: PodcastEpisode = {
        title: this.newEpisodeTitle.trim(),
        episodeNumber: this.newEpisodeNumber
      };
      this.podcastEpisodes.push(newEpisode);
      this.newEpisodeTitle = ''; // Clear the title input field
      this.newEpisodeNumber = null; // Clear the episode number input field
    }
  }

  // Method to remove an episode from the list by index
  removeEpisode(index: number): void {
    this.podcastEpisodes.splice(index, 1);
  }

  // Method to clear all episodes from the list
  clearAllEpisodes(): void {
    this.podcastEpisodes = [];
  }

  // Method to search for episodes containing a specific keyword in the title
  searchEpisode(keyword: string): PodcastEpisode[] {
    return this.podcastEpisodes.filter(episode =>
      episode.title.toLowerCase().includes(keyword.toLowerCase())
    );
  }
}
