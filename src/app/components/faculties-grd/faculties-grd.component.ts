import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-faculties-grd',
  templateUrl: './faculties-grd.component.html',
  styleUrls: ['./faculties-grd.component.css'],
})
export class FacultiesGrdComponent {
  @Input() data: any;
  currentPage = 1;
  itemsPerPage = 4;
  totalItems = 0;
  totalPages = 0;
  pages: number[] = [];
  faculties: any[] = [];
  constructor() {
    // this.calculateTotalPages();
    // console.log(this.data.length);
  }
  // ngOnInit(): void {
  //  console.log(this.data);
  // }
  ngAfterViewInit(): void {
    this.calculateTotalPages();
    console.log(this.data.length);
  }

  calculateTotalPages() {
    this.totalItems = this.data.length;
    console.log(this.totalItems);

    this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
    this.pages = Array(this.totalPages)
      .fill(0)
      .map((x, i) => i + 1);
  }

  setPage(page: number) {
    if (page < 1 || page > this.totalPages) {
      return;
    }
    this.currentPage = page;
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
}
