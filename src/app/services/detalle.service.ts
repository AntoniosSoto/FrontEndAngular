import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Detalle } from '../models/detalle.model';

@Injectable({
  providedIn: 'root'
})
export class DetalleService {
  private readonly API_URL = 'http://127.0.0.1:8000/api/detalle';

  constructor(private http: HttpClient) { }

  // Método para obtener todos los detalles de un contacto por su ID
  getDetallesPorContactoId(contactoId: number): Observable<Detalle[]> {
    const url = `${this.API_URL}/${contactoId}`;
    return this.http.get<Detalle[]>(url);
  }

  // Otros métodos del servicio...
}
