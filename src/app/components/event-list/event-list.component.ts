import { Component } from '@angular/core';


interface Event {
  name: string;
  date: string; // Date of the event
}

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent {
  eventList: Event[] = [
    { name: 'Halloween Day', date: '2024-11-01' },
    { name: 'Christmas Day', date: '2024-12-25' },
    { name: 'New Year Day', date: '2025-01-01' }
  ];


  newEventName: string = '';
  newEventDate: string = '';
  searchKeyword: string = '';


  addEvent(): void {
    if (this.newEventName.trim() && this.newEventDate.trim()) {
      const newEvent: Event = {
        name: this.newEventName.trim(),
        date: this.newEventDate
      };
      this.eventList.push(newEvent);
      this.clearFields();
    }
  }


  clearFields(): void {
    this.newEventName = '';
    this.newEventDate = '';
  }


  removeEvent(index: number): void {
    this.eventList.splice(index, 1);
  }


  searchEvent(keyword: string): Event[] {
    return this.eventList.filter(event =>
      event.name.toLowerCase().includes(keyword.toLowerCase())
    );
  }


  getFilteredEvents(): Event[] {
    if (this.searchKeyword.trim()) {
      return this.searchEvent(this.searchKeyword);
    }
    return this.eventList;
  }
}
