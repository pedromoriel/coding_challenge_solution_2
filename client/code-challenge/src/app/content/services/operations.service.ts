import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Operation } from '../models/operation';

@Injectable({
  providedIn: 'root'
})
export class OperationsService {

  constructor(private http: HttpClient) { }
  Operation: Operation;

  URL = 'http://localhost:3000/api/numbers';

  getASum(numbers: any) {
    return this.http.post(this.URL + '/sum', numbers);
  }

  getAProduct(number: number) {
    return this.http.post(this.URL + '/product', number);
  }

  getAPower(number: number) {
    return this.http.post(this.URL + '/power', number);
  }
}
