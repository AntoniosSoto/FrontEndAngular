import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Detalle } from 'src/app/models/detalle.model';
import { DetalleService } from 'src/app/services/detalle.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {
  detalles: Detalle[] = [];
  contactoId: number = 0;
  modalAbierto: boolean = false; // Agregamos una variable para controlar la visibilidad del modal
  
  constructor(
    private route: ActivatedRoute,
    private detalleService: DetalleService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.contactoId = +params['id'];
      this.obtenerDetallesPorContactoId();
    });
  }

  obtenerDetallesPorContactoId() {
    this.detalleService.getDetallesPorContactoId(this.contactoId)
      .subscribe(
        (data: any) => {
          this.detalles = data;
        },
        (error) => {
          console.error('Error al obtener detalles:', error);
        }
      );
  }
    abrirModal() {
      this.modalAbierto = true;
    }

    cerrarModal() {
      this.modalAbierto = false;
    }
}
