import { Component } from '@angular/core';

@Component({
  selector: 'app-language-list',
  templateUrl: './language-list.component.html',
  styleUrls: ['./language-list.component.css']
})
export class LanguageListComponent {
  language: string = '';
  searchTerm: string = '';

   languageList: string[] = ['JavaScript', 'Html', 'Typescript', 'Java', 'Ruby', 'Python'];

   filteredLanguages: string[] = [...this.languageList];

   addLanguage() {
    if (this.language.trim()) {
      this.languageList.push(this.language.trim());
      this.filteredLanguages.push(this.language.trim());

       this.language = '';
    }
  }


  removeLanguage(language: string) {
    const index = this.languageList.indexOf(language);
    if (index !== -1) {
      this.languageList.splice(index, 1);
      this.filteredLanguages.splice(index, 1);
    }
  }

   clearAll() {
    this.languageList = [];
    this.filteredLanguages = [];
  }

   filterLanguages() {
    this.filteredLanguages = this.languageList.filter(lang =>
      lang.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
