import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paginacion',
  templateUrl: './paginacion.component.html',
  styleUrls: ['./paginacion.component.scss']
})
export class PaginacionComponent {
  @Input() currentPage!: number;
  @Input() totalPages!: number;
  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  generatePageArray(): number[] {
    const maxPages = 5; // Número máximo de botones de página a mostrar
    const startPage = Math.max(1, this.currentPage - Math.floor(maxPages / 2));
    const endPage = Math.min(this.totalPages, startPage + maxPages - 1);
    return Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);
  }
  

  goToFirstPage(): void {
    this.pageChange.emit(1);
  }

  goToLastPage(): void {
    this.pageChange.emit(this.totalPages);
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.pageChange.emit(this.currentPage - 1);
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.pageChange.emit(this.currentPage + 1);
    }
  }
}
