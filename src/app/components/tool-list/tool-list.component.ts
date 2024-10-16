import { Component } from '@angular/core';

@Component({
  selector: 'app-tool-list',
  templateUrl: './tool-list.component.html',
  styleUrls: ['./tool-list.component.css']
})
export class ToolListComponent {
  toolName: string = '';
  toolType: string = '';
  toolDetails: string = '';
  searchQuery: string = '';


  toolList: { name: string, type: string, details: string }[] = [
    { name: 'Hammer', type: 'Hand Tool', details: 'Used for pounding or extracting nails' },
    { name: 'Screwdriver', type: 'Hand Tool', details: 'Used for turning screws' }
  ];


  addTool() {
    if (this.toolName && this.toolType && this.toolDetails) {
      const newTool = {
        name: this.toolName.trim(),
        type: this.toolType.trim(),
        details: this.toolDetails.trim()
      };
      this.toolList.push(newTool);


      this.toolName = '';
      this.toolType = '';
      this.toolDetails = '';
    }
  }

  removeTool(tool: { name: string, type: string, details: string }) {
    const index = this.toolList.indexOf(tool);
    if (index !== -1) {
      this.toolList.splice(index, 1);
    }
  }


  clearAll() {
    this.toolList = [];
  }


  searchTool() {
    if (this.searchQuery) {
      return this.toolList.filter(tool =>
        tool.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        tool.type.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        tool.details.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
    return this.toolList;
  }
}
