import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';

@Component({
  selector: 'app-lab-supplies-product-details',
  templateUrl: './lab-supplies-product-details.component.html',
  styleUrls: ['./lab-supplies-product-details.component.css']
})
export class LabSuppliesProductDetailsComponent {

  constructor(
    private route: ActivatedRoute,
    private router: Router
    ) { }

  title: any ;
  labSuppliesProducts = [
    { 
      title: 'Clot Activator Glass Tubes',
      id:1,
      imageSrc: './assets/images/products/Amino-Acid-Analyzer-LMAN-A100-250x250.jpg',
      altText: 'Air Sampler', 
      subCategories: ['Air Permeability Tester1', 'Fabric Air Permeability Tester1', 'Low Air Permeability Tester1'],

    },
    { 
      title: 'EDTA Glass Tubes', 
      id:2,
      imageSrc: './assets/images/products/Low-Air-Permeability-Tester-LMAT-502-250x250.jpg', 
      altText: 'Air Permeability Tester', 
      subCategories: ['Air Permeability Tester', 'Fabric Air Permeability Tester', 'Low Air Permeability Tester'],
    },
    { 
      title: 'Clot Activator PET Tubes',
      id:3,
      imageSrc: './assets/images/products/Air-Sampler-LMAL-A100-250x250.jpg',
      altText: 'Air Sampler', 
      subCategories: ['Air Permeability Tester', 'Fabric Air Permeability Tester', 'Low Air Permeability Tester'],
  
    },
    { 
      title: 'Gel and Clot Activator Glass Tubes', 
      id:4,
      imageSrc: './assets/images/products/Low-Air-Permeability-Tester-LMAT-502-250x250.jpg', 
      altText: 'Air Permeability Tester', 
      subCategories: ['Air Permeability Tester', 'Fabric Air Permeability Tester', 'Low Air Permeability Tester'],
    },
    { 
      title: 'EDTA PET Tubes', 
      id:5,
      imageSrc: './assets/images/products/Low-Air-Permeability-Tester-LMAT-502-250x250.jpg', 
      altText: 'Air Permeability Tester', 
      subCategories: ['Air Permeability Tester', 'Fabric Air Permeability Tester', 'Low Air Permeability Tester'],
    },
    { 
      title: 'Micro Blood Collection Tube', 
      id:6,
      imageSrc: './assets/images/products/Low-Air-Permeability-Tester-LMAT-502-250x250.jpg', 
      altText: 'Air Permeability Tester', 
      subCategories: ['Air Permeability Tester', 'Fabric Air Permeability Tester', 'Low Air Permeability Tester'],
    },
    { 
      title: 'Lithium Heparin Glass Tubes', 
      id:7,
      imageSrc: './assets/images/products/Low-Air-Permeability-Tester-LMAT-502-250x250.jpg', 
      altText: 'Air Permeability Tester', 
      subCategories: ['Air Permeability Tester', 'Fabric Air Permeability Tester', 'Low Air Permeability Tester'],
    },
    { 
      title: 'Glass Tubes', 
      id:8,
      imageSrc: './assets/images/products/Low-Air-Permeability-Tester-LMAT-502-250x250.jpg', 
      altText: 'Air Permeability Tester', 
      subCategories: ['Air Permeability Tester', 'Fabric Air Permeability Tester', 'Low Air Permeability Tester'],
    },

  ];

  subCategories: string[]= ['Clot Activator Glass Tubes',' Clot Activator PET Tubes','EDTA Glass Tubes','EDTA PET Tubes','Gel and Clot Activator Glass Tubes','Gel and Clot Activator PET Tubes','Lithium Heparin Glass Tubes','Lithium Heparin PET Tubes','Micro Blood Collection Tube','Micro Blood Collection Tube (Capillary Type)','No Additive Glass Tubes','No Additive PET Tubes','Non-Vacuum Blood Collection Tube','Sodium Citrate PET Tubes','Sodium Heparin Glass Tubes','Sodium Heparin PET Tubes','Glass Tube'];

  selectedCardTitles: string[] = [];
  
  ngOnInit(): void {
    this.route.paramMap.pipe(take(1)).subscribe(params => {
      this.title = params.get('title');
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
        queryParams: { titles: this.selectedCardTitles.join(','), prevTitle: this.title } 
      });
    } else {
      
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
