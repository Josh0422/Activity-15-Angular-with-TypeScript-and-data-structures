import { Component } from '@angular/core';

@Component({
  selector: 'app-mobile-app-list',
  templateUrl: './mobile-app-list.component.html',
  styleUrls: ['./mobile-app-list.component.css']
})
export class MobileAppListComponent {
  appList: { name: string, version: string }[] = [
    { name: 'WhatsApp', version: '2.21.11' },
    { name: 'Instagram', version: '3.0.5' }
  ];

  searchTerm: string = '';

  get filteredAppList() {
    return this.appList.filter(app =>
      app.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  addApp(name: string, version: string) {
    if (name && version) {
      this.appList.push({ name: name.trim(), version: version.trim() });
    }
  }

  removeApp(app: { name: string, version: string }) {
    const index = this.appList.indexOf(app);
    if (index > -1) {
      this.appList.splice(index, 1);
    }
  }

  clearAll() {
    this.appList = [];
  }
}
