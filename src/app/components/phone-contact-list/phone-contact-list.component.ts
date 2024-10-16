import { Component } from '@angular/core';

@Component({
  selector: 'app-phone-contact-list',
  templateUrl: './phone-contact-list.component.html',
  styleUrls: ['./phone-contact-list.component.css']
})
export class PhoneContactListComponent {
  name: string = '';
  phone: string = '';
  email: string = '';


  contactList: { name: string, phone: string, email: string }[] = [
    { name: 'Joshua', phone: '09101988845', email: 'delaritajosh3@gmail.com' },
  ];


  addContact() {
    if (this.name && this.phone && this.email) {
      const newContact = {
        name: this.name.trim(),
        phone: this.phone.trim(),
        email: this.email.trim()
      };
      this.contactList.push(newContact);


      this.name = '';
      this.phone = '';
      this.email = '';
    }
  }


  removeContact(contact: { name: string, phone: string, email: string }) {
    const index = this.contactList.indexOf(contact);
    if (index !== -1) {
      this.contactList.splice(index, 1);
    }
  }


  clearAll() {
    this.contactList = [];
  }


  searchContact(query: string) {
    return this.contactList.filter(contact =>
      contact.name.toLowerCase().includes(query.toLowerCase()) ||
      contact.phone.includes(query) ||
      contact.email.toLowerCase().includes(query.toLowerCase())
    );
  }
}
