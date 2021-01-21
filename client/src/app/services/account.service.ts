import { Injectable } from '@angular/core';
import { tap, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { User } from '../widgets/grid/grid.component';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(`http://127.0.0.1:8001/api/users/`).
        pipe(
          map((data: any) => {
            return data;
          })
        );
  }
}
