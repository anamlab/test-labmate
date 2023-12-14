import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';

@Component({
  selector: 'app-lab-supplies-subcat-products',
  templateUrl: './lab-supplies-subcat-products.component.html',
  styleUrls: ['./lab-supplies-subcat-products.component.css']
})

export class LabSuppliesSubcatProductsComponent {

  constructor(
    private route: ActivatedRoute,
    private router: Router
    ) { }

  prevTitle: any ;
  newTitle: any;
  labSuppliesProducts = [
    { 
      title: 'Amino Acid Analyzer',
      id:1,
      imageSrc: './assets/images/products/Amino-Acid-Analyzer-LMAN-A100-250x250.jpg',
      altText: 'Air Sampler', 
      subCategories: ['Air Permeability Tester', 'Fabric Air Permeability Tester', 'Low Air Permeability Tester'],

    },
    { 
      title: 'Air Permeability Testers', 
      id:2,
      imageSrc: './assets/images/products/Low-Air-Permeability-Tester-LMAT-502-250x250.jpg', 
      altText: 'Air Permeability Tester', 
      subCategories: ['Air Permeability Tester', 'Fabric Air Permeability Tester', 'Low Air Permeability Tester'],
    },
  ];

  subCategories: string[]= ['Fabric Air Permeability Tester LMAT-503', 'Fabric Air Permeability Tester LMAT-504'];

  selectedCardTitles: string[] = [];
  
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.prevTitle = params['title'];
      this.newTitle = params['subcategory'];
      console.log(params," new title:   -> ", this.newTitle," prev   titlt    -> ",this.prevTitle)

    });
  }

  handleButtonClick(suppliesTitle: string): void {
    if (this.selectedCardTitles.includes(suppliesTitle)) {
      this.selectedCardTitles = this.selectedCardTitles.filter(title => title !== suppliesTitle);
    } else {
      this.selectedCardTitles.push(suppliesTitle);
    }
  }

  compareProducts(): void {
    if (this.selectedCardTitles.length >= 2) { 
      console.log(this.selectedCardTitles);
      this.router.navigate(['/products/compare-products'], { 
        queryParams: { titles: this.selectedCardTitles.join(','), prevTitle: this.newTitle } 
      });
    } else {
      
    }
  }
  viewDetails(title: string ,id : number) : void {    
    this.router.navigate(['products/product-details',id], { 
    });
  }

  isCardSelected(suppliesTitle: string): boolean {
    return this.selectedCardTitles.includes(suppliesTitle);
  }

}
