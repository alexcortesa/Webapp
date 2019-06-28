import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from '../models/user.model';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  // tslint:disable-next-line: ban-types
  user: UsuarioModel = new UsuarioModel();
  invalidUser = false;
  messageError = '';

  constructor(private service: AuthService, private route: Router) { }

  ngOnInit() {
  }

  login(form: NgForm) {

    if (form.invalid) { return; }

    this.service.login(this.user)
      .subscribe(resp => {
        this.route.navigateByUrl('/contactos');
      }, (err) => {
        if (err.status === 401) {
          this.invalidUser = true;
          this.messageError = 'Usuario o Contaseña incorrecta';
        }
      }
      );

  }

}
