import { Injectable } from '@angular/core';
import { Credential } from '../models/credential';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Token } from 'src/app/models/token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string;

  constructor(private http: HttpClient) { }

  login(credential: Credential): Observable<Token> {
    return this.http.post<Token>(`${environment.apiHost}/auth/login`, credential)
  }

  setToken(token: string) {
    this.token = token;
  }

  getToken(): string {
    return this.token;
  }

  isLogin(): boolean {
    return !!this.token;
  }
}
