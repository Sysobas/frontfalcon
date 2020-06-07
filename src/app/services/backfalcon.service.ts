import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackfalconService {

  constructor(private http: HttpClient) { }

  public buscaTotal() {
    return this.http.get('https://backfalcon.herokuapp.com/archive/findAll');
  }
}
