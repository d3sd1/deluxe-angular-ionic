import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class StoreBannersService {

  constructor(private http: HttpClient) {}

  getBanners(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get('/assets/data/banners.json')
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
