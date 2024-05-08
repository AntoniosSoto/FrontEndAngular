import { Component, OnInit } from '@angular/core';
import { ContactoService } from 'src/app/services/contacto.service';
import { Contacto } from 'src/app/models/contacto.model';

@Component({
  selector: 'app-contacto-list',
  templateUrl: './contacto-list.component.html',
  styleUrls: ['./contacto-list.component.scss']
})
export class ContactoListComponent implements OnInit {
  currentPage: number = 1;
  totalPages!: number;
  contactos: Contacto[] = [];
  pageSize = 10;

  constructor(private contactoService: ContactoService) { }

  ngOnInit(): void {
    this.getContactosPaginados(this.currentPage);
  }

  getContactosPaginados(page: number): void {
    this.contactoService.getContactosPaginados(page, this.pageSize).subscribe(response => {
      this.contactos = response.data;
      this.currentPage = response.current_page;
      this.totalPages = response.last_page;
    });
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.getContactosPaginados(this.currentPage + 1);
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.getContactosPaginados(this.currentPage - 1);
    }
  }

  goToFirstPage(): void {
    this.getContactosPaginados(1);
  }

  goToLastPage(): void {
    this.getContactosPaginados(this.totalPages);
  }
}
