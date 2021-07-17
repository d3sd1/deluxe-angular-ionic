import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {}

  getAccountData(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get('/assets/data/user.json')
      .subscribe(
        data => {
          resolve(data);
        },
        err => {
          reject();
        }
      );
    });
  }
}
