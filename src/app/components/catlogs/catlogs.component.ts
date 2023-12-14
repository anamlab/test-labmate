// catlogs.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catlogs',
  templateUrl: './catlogs.component.html',
  styleUrls: ['./catlogs.component.css']
})
export class CatlogsComponent implements OnInit {
  links: string[] = ['Catlog A', 'Catlog B', 'Catlog C', 'Catlog D', 'Catlog E', 'Catlog F', 'Catlog G', 'Catlog H', 'Catlog I', 'Catlog J', 'Catlog K','Catlog L', 'Catlog M', 'Catlog N','Catlog N', 'Catlog O', 'Catlog P','Catlog Q', 'Catlog R', 'Catlog S','Catlog T',  'Catlog U', 'Catlog V','Catlog W' , 'Catlog X', 'Catlog Y','Catlog Z',];

  // Pagination variables
  itemsPerPage = 9;
  currentPage: number = 1; // Change the type to number

  // Property to store the links to display based on pagination
  displayedLinks: string[] = [];

  ngOnInit(): void {
    this.updateDisplayedLinks();
  }

  updateDisplayedLinks(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.displayedLinks = this.links.slice(startIndex, endIndex);
  }

  onPageChange(newPage: number): void {
    this.currentPage = newPage;
    this.updateDisplayedLinks();
  }

  getPagesArray(): number[] {
    return Array.from({ length: Math.ceil(this.links.length / this.itemsPerPage) }, (_, index) => index + 1);
  }

  
}
