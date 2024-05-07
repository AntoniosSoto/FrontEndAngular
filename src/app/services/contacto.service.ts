import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contacto } from '../models/contacto.model';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  private readonly API_URL = 'http://127.0.0.1:8000/api';

  constructor(
    private http: HttpClient
  ) { }

  getContactos(): Observable<Contacto[]> {
    return this.http.get<Contacto[]>(`${this.API_URL}/expenses`);
  }
}
