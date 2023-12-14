import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css'],
  animations: [
    trigger('bodyExpansion', [
      state('collapsed', style({ height: '0px', overflow: 'hidden' })),
      state('expanded', style({ height: '*' })),
      transition('collapsed <=> expanded', animate('300ms ease-in-out')),
    ]),
  ],
})

export class AllProductsComponent {
  displayedCatalog: { letter: string, names: string[] } = { letter: 'A', names: [] };

  // Pagination variables
  itemsPerPage = 2;
  currentPage: string = 'A';
  currentPageBatch: string[] = [];
  panelOpenState = false;
  cardStates: string[] = [];
  
  products = [
    { 
      title: 'Air Permeability Testers', 
      imageSrc: './assets/images/products/Low-Air-Permeability-Tester-LMAT-502-250x250.jpg', 
      altText: 'Air Permeability Tester', 
      subCategories: ['Air Permeability Tester', 'Fabric Air Permeability Tester', 'Low Air Permeability Tester'],
    },
    { 
      title: 'Air Sampler',
      imageSrc: './assets/images/products/Air-Sampler-LMAL-A100-250x250.jpg',
      altText: 'Air Sampler', 
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, tempore ducimus minima laudantium debitis numquam alias adipisci repudiandae quos tempora. Dignissimos nostrum harum voluptate provident. Exercitationem similique consequuntur amet dolorum.' 
    },
    { 
      title: 'Air Shower',
      imageSrc: './assets/images/products/Air-Shower-LMAS-501-250x250.jpg',
      altText: 'Air Sampler', 
      subCategories: ['Air Permeability Tester', 'Fabric Air Permeability Tester', 'Low Air Permeability Tester'],
    },
    { 
      title: 'Amino Acid Analyzer',
      imageSrc: './assets/images/products/Amino-Acid-Analyzer-LMAN-A100-250x250.jpg',
      altText: 'Air Sampler', 
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, tempore ducimus minima laudantium debitis numquam alias adipisci repudiandae quos tempora. Dignissimos nostrum harum voluptate provident. Exercitationem similique consequuntur amet dolorum.' 
    },
    { 
      title: 'Air Permeability Testers', 
      imageSrc: './assets/images/products/Low-Air-Permeability-Tester-LMAT-502-250x250.jpg', 
      altText: 'Air Permeability Tester', 
      subCategories: ['Air Permeability Tester', 'Fabric Air Permeability Tester', 'Low Air Permeability Tester'],
    },
    { 
      title: 'Air Sampler Testers',
      imageSrc: './assets/images/products/Air-Sampler-LMAL-A100-250x250.jpg',
      altText: 'Air Sampler', 
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, tempore ducimus minima laudantium debitis numquam alias adipisci repudiandae quos tempora. Dignissimos nostrum harum voluptate provident. Exercitationem similique consequuntur amet dolorum.' 
    },
    { 
      title: 'Air Shower',
      imageSrc: './assets/images/products/Air-Shower-LMAS-501-250x250.jpg',
      altText: 'Air Sampler', 
      subCategories: ['Air Permeability Tester', 'Fabric Air Permeability Tester', 'Low Air Permeability Tester'],
    },
    { 
      title: 'Amino Acid Analyzer',
      imageSrc: './assets/images/products/Amino-Acid-Analyzer-LMAN-A100-250x250.jpg',
      altText: 'Air Sampler', 
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, tempore ducimus minima laudantium debitis numquam alias adipisci repudiandae quos tempora. Dignissimos nostrum harum voluptate provident. Exercitationem similique consequuntur amet dolorum.' 
    },
    { 
      title: 'Ball Mill', 
      imageSrc: './assets/images/products/Low-Air-Permeability-Tester-LMAT-502-250x250.jpg', 
      altText: 'Air Permeability Tester', 
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, tempore ducimus minima laudantium debitis numquam alias adipisci repudiandae quos tempora. Dignissimos nostrum harum voluptate provident. Exercitationem similique consequuntur amet dolorum.'
    },
    { 
      title: 'Bar-Coded Cryogenic Vials',
      imageSrc: './assets/images/products/Air-Sampler-LMAL-A100-250x250.jpg',
      altText: 'Air Sampler', 
      subCategories: ['Air Permeability Tester', 'Low Air Permeability Tester'],
    },  
    { 
      title: 'Biological Safety Cabinet',
      imageSrc: './assets/images/products/Air-Shower-LMAS-501-250x250.jpg',
      altText: 'Air Sampler', 
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, tempore ducimus minima laudantium debitis numquam alias adipisci repudiandae quos tempora. Dignissimos nostrum harum voluptate provident. Exercitationem similique consequuntur amet dolorum.' 
    },
    { 
      title: ' Blood Bag Sealer',
      imageSrc: './assets/images/products/Amino-Acid-Analyzer-LMAN-A100-250x250.jpg',
      altText: 'Air Sampler', 
      subCategories: ['Air Permeability Tester', 'Fabric Air Permeability Tester', 'Low Air Permeability Tester'],
    },
    { 
      title: 'Biological Safety Cabinet',
      imageSrc: './assets/images/products/Air-Shower-LMAS-501-250x250.jpg',
      altText: 'Air Sampler', 
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, tempore ducimus minima laudantium debitis numquam alias adipisci repudiandae quos tempora. Dignissimos nostrum harum voluptate provident. Exercitationem similique consequuntur amet dolorum.' 
    },
    { 
      title: ' Blood Bag Sealer',
      imageSrc: './assets/images/products/Amino-Acid-Analyzer-LMAN-A100-250x250.jpg',
      altText: 'Air Sampler', 
      subCategories: ['Air Permeability Tester', 'Fabric Air Permeability Tester', 'Low Air Permeability Tester'],
    },
    { 
      title: 'Blood Collection Tubes', 
      imageSrc: './assets/images/products/Low-Air-Permeability-Tester-LMAT-502-250x250.jpg', 
      altText: 'Air Permeability Tester', 
      subCategories: [ 'Fabric Air Permeability Tester', 'Low Air Permeability Tester'],
    },
    { 
      title: 'Blood Thaw Machine',
      imageSrc: './assets/images/products/Air-Sampler-LMAL-A100-250x250.jpg',
      altText: 'Air Sampler', 
    },
    { 
      title: 'Blood Collection Monitor',
      imageSrc: './assets/images/products/Air-Shower-LMAS-501-250x250.jpg',
      altText: 'Air Sampler', 
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, tempore ducimus minima laudantium debitis numquam alias adipisci repudiandae quos tempora. Dignissimos nostrum harum voluptate provident. Exercitationem similique consequuntur amet dolorum.' 
    },
    { 
      title: 'Centrifugal Extractor',
      imageSrc: './assets/images/products/Amino-Acid-Analyzer-LMAN-A100-250x250.jpg',
      altText: 'Air Sampler', 
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, tempore ducimus minima laudantium debitis numquam alias adipisci repudiandae quos tempora. Dignissimos nostrum harum voluptate provident. Exercitationem similique consequuntur amet dolorum.' 
    },
    { 
      title: 'Centrifuge', 
      imageSrc: './assets/images/products/Low-Air-Permeability-Tester-LMAT-502-250x250.jpg', 
      altText: 'Air Permeability Tester', 
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, tempore ducimus minima laudantium debitis numquam alias adipisci repudiandae quos tempora. Dignissimos nostrum harum voluptate provident. Exercitationem similique consequuntur amet dolorum.'
    },
    { 
      title: 'Centrifugeware',
      imageSrc: './assets/images/products/Air-Sampler-LMAL-A100-250x250.jpg',
      altText: 'Air Sampler', 
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, tempore ducimus minima laudantium debitis numquam alias adipisci repudiandae quos tempora. Dignissimos nostrum harum voluptate provident. Exercitationem similique consequuntur amet dolorum.' 
    },
    { 
      title: 'Chiller',
      imageSrc: './assets/images/products/Air-Shower-LMAS-501-250x250.jpg',
      altText: 'Air Sampler', 
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, tempore ducimus minima laudantium debitis numquam alias adipisci repudiandae quos tempora. Dignissimos nostrum harum voluptate provident. Exercitationem similique consequuntur amet dolorum.' 
    },
    { 
      title: ' Chlorophyll Meter',
      imageSrc: './assets/images/products/Amino-Acid-Analyzer-LMAN-A100-250x250.jpg',
      altText: 'Air Sampler', 
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, tempore ducimus minima laudantium debitis numquam alias adipisci repudiandae quos tempora. Dignissimos nostrum harum voluptate provident. Exercitationem similique consequuntur amet dolorum.' 
    },
    { 
      title: 'Chromatography', 
      imageSrc: './assets/images/products/Low-Air-Permeability-Tester-LMAT-502-250x250.jpg', 
      altText: 'Air Permeability Tester', 
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, tempore ducimus minima laudantium debitis numquam alias adipisci repudiandae quos tempora. Dignissimos nostrum harum voluptate provident. Exercitationem similique consequuntur amet dolorum.'
    },
    { 
      title: 'Desiccator Dry Cabinet',
      imageSrc: './assets/images/products/Air-Sampler-LMAL-A100-250x250.jpg',
      altText: 'Air Sampler', 
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, tempore ducimus minima laudantium debitis numquam alias adipisci repudiandae quos tempora. Dignissimos nostrum harum voluptate provident. Exercitationem similique consequuntur amet dolorum.' 
    },
    { 
      title: 'ECG',
      imageSrc: './assets/images/products/Air-Shower-LMAS-501-250x250.jpg',
      altText: 'Air Sampler', 
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, tempore ducimus minima laudantium debitis numquam alias adipisci repudiandae quos tempora. Dignissimos nostrum harum voluptate provident. Exercitationem similique consequuntur amet dolorum.' 
    },
    { 
      title: 'Dry Heat Blood Transfusion Warmer',
      imageSrc: './assets/images/products/Amino-Acid-Analyzer-LMAN-A100-250x250.jpg',
      altText: 'Air Sampler', 
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, tempore ducimus minima laudantium debitis numquam alias adipisci repudiandae quos tempora. Dignissimos nostrum harum voluptate provident. Exercitationem similique consequuntur amet dolorum.' 
    },
    { 
      title: 'Evaporators', 
      imageSrc: './assets/images/products/Low-Air-Permeability-Tester-LMAT-502-250x250.jpg', 
      altText: 'Air Permeability Tester', 
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, tempore ducimus minima laudantium debitis numquam alias adipisci repudiandae quos tempora. Dignissimos nostrum harum voluptate provident. Exercitationem similique consequuntur amet dolorum.'
    },
    { 
      title: 'Electrophoresis System',
      imageSrc: './assets/images/products/Air-Sampler-LMAL-A100-250x250.jpg',
      altText: 'Air Sampler', 
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, tempore ducimus minima laudantium debitis numquam alias adipisci repudiandae quos tempora. Dignissimos nostrum harum voluptate provident. Exercitationem similique consequuntur amet dolorum.' 
    },
    { 
      title: 'Desiccator',
      imageSrc: './assets/images/products/Air-Shower-LMAS-501-250x250.jpg',
      altText: 'Air Sampler', 
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, tempore ducimus minima laudantium debitis numquam alias adipisci repudiandae quos tempora. Dignissimos nostrum harum voluptate provident. Exercitationem similique consequuntur amet dolorum.' 
    },
    { 
      title: 'Densitometer',
      imageSrc: './assets/images/products/Amino-Acid-Analyzer-LMAN-A100-250x250.jpg',
      altText: 'Air Sampler', 
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, tempore ducimus minima laudantium debitis numquam alias adipisci repudiandae quos tempora. Dignissimos nostrum harum voluptate provident. Exercitationem similique consequuntur amet dolorum.' 
    },
  ];
  filteredProducts: any[] = [];

  ngOnInit(): void {
    this.updateDisplayedProducts();
    this.updateCurrentPageBatch();
    this.cardStates = Array(this.filteredProducts.length).fill('collapsed');
  }

  updateDisplayedProducts(): void {
    const startingLetter = this.currentPage.toUpperCase();
    this.filteredProducts = this.products
      .filter(product => product.title.toUpperCase().startsWith(startingLetter));
  }

    
  onPageChange(newPage: string): void {
    if (newPage >= 'A' && newPage <= 'Z') {
      this.currentPage = newPage;
      this.updateDisplayedProducts();
      this.updateCurrentPageBatch();
    }
  }

  getPagesArray(): string[] {
    return Array.from({ length: 26 }, (_, index) => String.fromCharCode(65 + index));
  }

  getPreviousPage(): string {
    const currentIndex = this.getIndexOfCurrentCatalog();
    const previousIndex = currentIndex > 0 ? currentIndex - 1 : 0;
    return this.getPagesArray()[previousIndex];
  }

  getNextPage(): string {
    const currentIndex = this.getIndexOfCurrentCatalog();
    const nextIndex = currentIndex < this.getPagesArray().length - 1 ? currentIndex + 1 : this.getPagesArray().length - 1;
    return this.getPagesArray()[nextIndex];
  }

  private getIndexOfCurrentCatalog(): number {
    return this.getPagesArray().indexOf(this.currentPage);
  }

  updateCurrentPageBatch(): void {
    const currentPageIndex = this.getPagesArray().indexOf(this.currentPage);
    const batchesToShow = 5; // Adjust the number of batches to show

    // Calculate the start and end index for the batches
    const startIndex = Math.max(0, currentPageIndex - Math.floor(batchesToShow / 2));
    const endIndex = Math.min(this.getPagesArray().length, startIndex + batchesToShow);

    this.currentPageBatch = this.getPagesArray().slice(startIndex, endIndex);
  }

  toggle(index: number) {
    this.cardStates[index] = (this.cardStates[index] === 'collapsed') ? 'expanded' : 'collapsed';
  }
 
}
