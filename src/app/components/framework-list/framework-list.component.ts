import { Component } from '@angular/core';


interface Framework {
  name: string;
  language: string;
}

@Component({
  selector: 'app-framework-list',
  templateUrl: './framework-list.component.html',
  styleUrls: ['./framework-list.component.css']
})
export class FrameworkListComponent {

  frameworkList: Framework[] = [
    { name: 'Angular', language: 'TypeScript' },
    { name: 'React', language: 'JavaScript' },
    { name: 'Vue.js', language: 'JavaScript' },
  ];


  newFrameworkName: string = '';
  newFrameworkLanguage: string = '';
  searchKeyword: string = '';


  addFramework(): void {
    if (this.newFrameworkName.trim() && this.newFrameworkLanguage.trim()) {
      const newFramework: Framework = {
        name: this.newFrameworkName.trim(),
        language: this.newFrameworkLanguage.trim(),
      };
      this.frameworkList.push(newFramework);
      this.clearFields();
    }
  }


  clearFields(): void {
    this.newFrameworkName = '';
    this.newFrameworkLanguage = '';
  }


  removeFramework(index: number): void {
    this.frameworkList.splice(index, 1);
  }


  searchFramework(keyword: string): Framework[] {
    return this.frameworkList.filter(framework =>
      framework.name.toLowerCase().includes(keyword.toLowerCase()) ||
      framework.language.toLowerCase().includes(keyword.toLowerCase())
    );
  }


  getFilteredFrameworks(): Framework[] {
    if (this.searchKeyword.trim()) {
      return this.searchFramework(this.searchKeyword);
    }
    return this.frameworkList;
  }
}
