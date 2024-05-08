import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Detalle } from 'src/app/models/detalle.model';
import { DetalleService } from 'src/app/services/detalle.service'; // Verifica esta línea

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  detalles: Detalle[] = [];
  contactoId: number = 0;

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
      .subscribe(detalles => this.detalles = detalles);
  }

  abrirModal() {
    // Lógica para abrir el modal
  }
}
