import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUserList() {
    return this.http.get('https://jsonplaceholder.typicode.com/users').pipe(
      map((users: any) => {
        return users.map((user: any) => {
          user.id = user.id.toString().padStart(2, '0');
          return user;
        });
      }),
      catchError((error: any): any => {
        console.error('Error fetching user data:', error);
      })
    );
  }
}
