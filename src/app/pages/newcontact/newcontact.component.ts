import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newcontact',
  templateUrl: './newcontact.component.html',
  styles: []
})
export class NewcontactComponent implements OnInit {

  contact: UsuarioModel = new UsuarioModel();
  invalidUser = false;
  messageError = '';

  constructor(private service: AuthService, private route: Router) { }

  ngOnInit() {
  }

  createContact(form: NgForm) {
    if (form.invalid) { return; }

    this.service.createContact(this.contact)
      .subscribe(resp => {
        if (resp) {
          this.route.navigateByUrl('/contactos');
        } else {
          this.invalidUser = true;
          this.messageError = 'No se puede guardar el contacto, el nuemero movil ya existe';
        }
      });
  }

  returnContacts() {
    this.route.navigateByUrl('/contactos');
  }

}
