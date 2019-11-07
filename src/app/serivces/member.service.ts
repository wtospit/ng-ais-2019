import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Member } from '../models/member';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private http: HttpClient) { }

  list(): Observable<Member[]> {
    return this.http.get<Member[]>(`${environment.apiHost}/bnk/members`);
  }

  get(id: string): Observable<Member> {
    return this.http.get<Member>(`${environment.apiHost}/bnk/members/${id}`);
  }

  save(id: string, data: Member): Observable<Object> {
    return this.http.patch<Object>(`${environment.apiHost}/bnk/members/${id}`, data);
  }
}
