import { Component } from '@angular/core';


interface DeveloperTool {
  name: string;
  type: string;
}

@Component({
  selector: 'app-developer-tools-list',
  templateUrl: './developer-tools-list.component.html',
  styleUrls: ['./developer-tools-list.component.css']
})
export class DeveloperToolsListComponent {
  developerToolsList: DeveloperTool[] = [
    { name: 'Visual Studio Code', type: 'IDE' },
    { name: 'Git', type: 'Version Control' },
    { name: 'Webstorm', type: 'IDE' },
  ];


  newToolName: string = '';
  newToolType: string = '';
  searchKeyword: string = '';


  addTool(): void {
    if (this.newToolName.trim() && this.newToolType.trim()) {
      const newTool: DeveloperTool = {
        name: this.newToolName.trim(),
        type: this.newToolType.trim()
      };
      this.developerToolsList.push(newTool);
      this.clearFields();
    }
  }


  clearFields(): void {
    this.newToolName = '';
    this.newToolType = '';
  }


  removeTool(index: number): void {
    this.developerToolsList.splice(index, 1);
  }


  searchTool(keyword: string): DeveloperTool[] {
    return this.developerToolsList.filter(tool =>
      tool.name.toLowerCase().includes(keyword.toLowerCase()) ||
      tool.type.toLowerCase().includes(keyword.toLowerCase())
    );
  }


  getFilteredTools(): DeveloperTool[] {
    if (this.searchKeyword.trim()) {
      return this.searchTool(this.searchKeyword);
    }
    return this.developerToolsList;
  }
}
