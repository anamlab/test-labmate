import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';

@Component({
  selector: 'app-lab-equipment-product-detail',
  templateUrl: './lab-equipment-product-detail.component.html',
  styleUrls: ['./lab-equipment-product-detail.component.css']
})
export class LabEquipmentProductDetailComponent {
  
  constructor(
    private route: ActivatedRoute,
    private router: Router
    ) { }

  title: any ;
  laboratoryEquipmentsProducts = [
    { 
      title: 'Amino Acid Analyzer',
      id:1,
      imageSrc: './assets/images/products/Amino-Acid-Analyzer-LMAN-A100-250x250.jpg',
      altText: 'Air Sampler', 
      subCategories: ['Air Permeability Tester1', 'Fabric Air Permeability Tester1', 'Low Air Permeability Tester1'],
    },
    { 
      title: 'Air Permeability Testers', 
      id:2,
      imageSrc: './assets/images/products/Low-Air-Permeability-Tester-LMAT-502-250x250.jpg', 
      altText: 'Air Permeability Tester', 
      subCategories: ['Air Permeability Tester', 'Fabric Air Permeability Tester', 'Low Air Permeability Tester'],
    },
    { 
      title: 'Air Sampler',
      id:3,
      imageSrc: './assets/images/products/Air-Sampler-LMAL-A100-250x250.jpg',
      altText: 'Air Sampler', 
      subCategories: ['Air Permeability Tester', 'Fabric Air Permeability Tester', 'Low Air Permeability Tester'],
  
    },
    { 
      title: 'Air Permeability Tester', 
      id:4,
      imageSrc: './assets/images/products/Low-Air-Permeability-Tester-LMAT-502-250x250.jpg', 
      altText: 'Air Permeability Tester', 
      subCategories: ['Air Permeability Tester', 'Fabric Air Permeability Tester', 'Low Air Permeability Tester'],
    },

  ];

  subCategories: string[]= ['Air Permeability Tester', 'Fabric Air Permeability Tester', 'Low Air Permeability Tester'];

  selectedCardTitles: string[] = [];
  
  ngOnInit(): void {
    this.route.paramMap.pipe(take(1)).subscribe(params => {
      this.title = params.get('title');
    });
  }

  handleButtonClick(equipmentTitle: string): void {
    if (this.selectedCardTitles.includes(equipmentTitle)) {
      // Title already selected, remove it
      this.selectedCardTitles = this.selectedCardTitles.filter(title => title !== equipmentTitle);
    } else {
      // Title not selected, add it
      this.selectedCardTitles.push(equipmentTitle);
    }
  }

  compareProducts(): void {
    if (this.selectedCardTitles.length >= 2) { 
      console.log(this.selectedCardTitles);
      this.router.navigate(['/products/compare-products'], { 
        queryParams: { titles: this.selectedCardTitles.join(','), prevTitle: this.title } 
      });
    }  else {

    }
  }
  isCardSelected(equipmentTitle: string): boolean {
    return this.selectedCardTitles.includes(equipmentTitle);
  }

  viewDetails(title: string ,id : number) : void {    
    this.router.navigate(['products/product-details',id], { 
    });
  }

}
