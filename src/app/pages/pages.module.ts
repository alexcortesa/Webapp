import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ContactsComponent } from './contacts/contacts.component';
import { NewcontactComponent } from './newcontact/newcontact.component';
import { PagesComponent } from './pages.component';
import { PAGES_ROUTES } from './pages.routes';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
    declarations: [
        ContactsComponent,
        NewcontactComponent,
        PagesComponent
    ],
    exports: [
        PagesComponent
    ],
    imports: [
        PAGES_ROUTES,
        FormsModule,
        BrowserModule
    ]
})

export class PageModule { }