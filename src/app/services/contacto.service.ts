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
  getContacto(id: number): Observable<Contacto> {
    return this.http.get<Contacto>(`${this.API_URL}/${id}`);
  }
  createContacto(data: Contacto): Observable<Contacto> {
    return this.http.post<Contacto>(`${this.API_URL}/`, data);
  }
  updateContacto(id: number, data: Contacto): Observable<Contacto> {
    return this.http.put<Contacto>(`${this.API_URL}/${id}`, data);
  }
  deleteContacto(id: number): Observable<any> {
    return this.http.delete<any>(`${this.API_URL}/${id}`);
  }
}