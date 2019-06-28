import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UsuarioModel } from '../models/user.model';
import 'rxjs/operators';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'http://localhost:1889/api/login/authenticate';
  private urlContact = 'http://localhost:1889/api/contacts';
  userToken = '';

  constructor(private http: HttpClient) { }

  login(user: UsuarioModel) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(this.url, user, { headers }).pipe(
      map(resp => {
        this.saveToken(resp.toString());
      })
    );
  }

  logout() {
    localStorage.removeItem('token');
  }

  getContacts() {
    let headers = new HttpHeaders();
    //headers = headers.set('Content-Type', 'application/json');
    headers = headers.set('Authorization', `Bearer ${this.readToken()}`);
    return this.http.get(this.urlContact, { headers })
      .pipe(resp => {
        return resp;
      });
  }

  deleteContact(contactId: string) {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${this.readToken()}`);
    return this.http.delete(`${this.urlContact}/${contactId}`, { headers })
      .pipe(resp => {
        return resp;
      });
  }

  createContact(contact: UsuarioModel) {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${this.readToken()}`);
    return this.http.post(this.urlContact, contact, { headers })
      .pipe(resp => {
        return resp;
      });
  }

  private saveToken(idToken: string) {
    this.userToken = idToken;
    localStorage.setItem('token', idToken);
  }

  readToken() {
    if (localStorage.getItem('token')) {
      this.userToken = localStorage.getItem('token');
    } else {
      this.userToken = '';
    }

    return this.userToken;
  }

  isAuth(): boolean {
    return this.userToken.length > 20;
  }
}
