import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lab-equipment-subcat-product',
  templateUrl: './lab-equipment-subcat-product.component.html',
  styleUrls: ['./lab-equipment-subcat-product.component.css']
})

export class LabEquipmentSubcatProductComponent {
  
  constructor(
    private route: ActivatedRoute,
    private router: Router
    ) { }

  newTitle: any ;
  prevTitle: any;
  laboratoryEquipmentsProducts = [
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

  // subCategories: string[]= ['Fabric Air Permeability Tester LMAT-503', 'Fabric Air Permeability Tester LMAT-504'];

  selectedCardTitles: string[] = [];
  
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.prevTitle = params['title'];
      this.newTitle = params['subcategory'];
      console.log(params," new title:   -> ", this.newTitle," prev   subcat    -> ",this.prevTitle)
    });
  }

  handleButtonClick(equipmentTitle: string): void {
    if (this.selectedCardTitles.includes(equipmentTitle)) {
      this.selectedCardTitles = this.selectedCardTitles.filter(title => title !== equipmentTitle);
    } else {
      this.selectedCardTitles.push(equipmentTitle);
    }
  }
  
  compareProducts(): void {
    if (this.selectedCardTitles.length >= 2) { 
      console.log(this.selectedCardTitles);
      this.router.navigate(['/products/compare-products'], { 
        queryParams: { titles: this.selectedCardTitles.join(','), prevTitle: this.newTitle } 
      });
    }
  }

  viewDetails(title: string ,id : number) : void {    
      this.router.navigate(['products/product-details',id], { 
        // queryParams: { , prevTitle: this.title } 
      });
  }
  
  isCardSelected(equipmentTitle: string): boolean {
    return this.selectedCardTitles.includes(equipmentTitle);
  }

}
