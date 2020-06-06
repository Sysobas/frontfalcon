import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Archive } from '../register/archive';


var httpOptions = {headers: new HttpHeaders({"Content-Type": "application/json"})};

@Injectable({ providedIn: 'root'})

export class ArchiveService {
  url = 'http://localhost:8080/archive';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Archive[]> {
    const apiurl = `${this.url}/findAll`;
    return this.http.get<Archive[]>(this.url);
  }

  getById(id: number): Observable<Archive> {
    const apiurl = `${this.url}/${id}`;
    return this.http.get<Archive>(apiurl);
  }

  create(archive: Archive): Observable<Archive> {
    return this.http.post<Archive>(this.url, archive, httpOptions);
  }

  update(id: number, archive: Archive): Observable<Archive> {
    const apiurl = `${this.url}/${id}`;
    return this.http.put<Archive>(apiurl,archive, httpOptions);
  }

  deleteById(id: number): Observable<number> {
    const apiurl = `${this.url}/${id}`;
    return this.http.delete<number>(apiurl, httpOptions);
  }
}
