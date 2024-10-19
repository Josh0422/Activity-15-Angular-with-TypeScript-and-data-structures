import { Component } from '@angular/core';


interface Presentation {
  topic: string;
}

@Component({
  selector: 'app-presentation-list',
  templateUrl: './presentation-list.component.html',
  styleUrls: ['./presentation-list.component.css']
})
export class PresentationListComponent {
  presentationList: Presentation[] = [
    { topic: 'Healthcare' },
    { topic: 'Sustainable Energy Solutions' },
    { topic: 'The Future of Computing' }
  ];


  newPresentationTopic: string = '';
  searchKeyword: string = '';


  addPresentation(): void {
    if (this.newPresentationTopic.trim()) {
      const newTopic: Presentation = {
        topic: this.newPresentationTopic.trim()
      };
      this.presentationList.push(newTopic);
      this.clearFields();
    }
  }


  clearFields(): void {
    this.newPresentationTopic = '';
  }


  removePresentation(index: number): void {
    this.presentationList.splice(index, 1);
  }

  clearAllPresentations(): void {
    this.presentationList = [];
  }


  searchPresentation(keyword: string): Presentation[] {
    return this.presentationList.filter(presentation =>
      presentation.topic.toLowerCase().includes(keyword.toLowerCase())
    );
  }


  getFilteredPresentations(): Presentation[] {
    if (this.searchKeyword.trim()) {
      return this.searchPresentation(this.searchKeyword);
    }
    return this.presentationList;
  }
}
