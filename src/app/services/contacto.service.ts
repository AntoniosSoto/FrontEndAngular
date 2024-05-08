import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contacto } from '../models/contacto.model';

interface PaginatedResponse {
  data: Contacto[];
  current_page: number;
  last_page: number;
  // Otros campos de paginación si es necesario
}

@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  private readonly API_URL = 'http://127.0.0.1:8000/api/contacto';

  constructor(private http: HttpClient) { }

  getContactosPaginados(page: number, pageSize: number): Observable<PaginatedResponse> {
    const params = {
      page: page.toString(),
      pageSize: pageSize.toString()
    };
    return this.http.get<PaginatedResponse>(this.API_URL, { params });
  }
}