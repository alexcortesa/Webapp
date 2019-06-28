import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {

  constructor(private service: AuthService, private route: Router) { }

  ngOnInit() {
  }

  logout() {
    this.service.logout();
    this.route.navigateByUrl('/login');
  }

}
