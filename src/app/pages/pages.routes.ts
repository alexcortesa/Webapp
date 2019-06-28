import { Routes, RouterModule } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { NewcontactComponent } from './newcontact/newcontact.component';
import { PagesComponent } from './pages.component';
import { AuthGuard } from '../guards/auth.guard';

const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'contactos', component: ContactsComponent, canActivate: [AuthGuard] },
            { path: 'nuevo', component: NewcontactComponent, canActivate: [AuthGuard] },
            { path: '', redirectTo: '/contactos', pathMatch: 'full' }
        ]
    }
]

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);