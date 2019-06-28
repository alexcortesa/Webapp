import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styles: []
})
export class ContactsComponent implements OnInit {
  contactsList: any[] = [];

  constructor(private service: AuthService, private route: Router) {
    service.getContacts().subscribe((resp: any[]) => {
      this.contactsList = resp;
    }, err => {
      console.log(err);
    });
  }

  ngOnInit() {
  }

  deleteContact(contact: string) {
    this.service.deleteContact(contact)
      .subscribe(resp => {
        this.contactsList = this.contactsList.filter(item => item.ContactId !== contact);

      }, err => {
        console.log(err);
      });
  }

  navigateNew() {
    this.route.navigateByUrl('/nuevo');
  }


}
