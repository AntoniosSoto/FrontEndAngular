import { Component, OnInit } from '@angular/core';
import { ContactoService } from 'src/app/services/contacto.service';
import { Contacto } from 'src/app/models/contacto.model';

@Component({
  selector: 'app-contacto-list',
  templateUrl: './contacto-list.component.html',
  styleUrls: ['./contacto-list.component.scss']
})
export class ContactoListComponent implements OnInit {

  contactos: Contacto[] = [];
  currentPage = 1;
  totalPages = 1;
  pageSize = 10; // Tamaño de la página

  constructor(private contactoService: ContactoService) { }

  ngOnInit(): void {
    this.getContactosPaginados(this.currentPage, this.pageSize);
  }

  getContactosPaginados(page: number, pageSize: number): void {
    this.contactoService.getContactosPaginados(page, pageSize).subscribe(response => {
      this.contactos = response.data;
      this.currentPage = response.current_page;
      this.totalPages = response.last_page;
    });
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.getContactosPaginados(this.currentPage + 1, this.pageSize);
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.getContactosPaginados(this.currentPage - 1, this.pageSize);
    }
  }
  goToFirstPage(): void {
    this.currentPage = 1;
    this.getContactosPaginados(this.currentPage, this.pageSize);
  }
  goToLastPage(): void {
    this.currentPage = this.totalPages;
    this.getContactosPaginados(this.currentPage, this.pageSize);
  }
}