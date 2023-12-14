import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-lab-equipments',
  templateUrl: './lab-equipments.component.html',
  styleUrls: ['./lab-equipments.component.css'],
  animations: [
    trigger('bodyExpansion', [
      state('collapsed', style({ height: '0px', overflow: 'hidden' })),
      state('expanded', style({ height: '*' })),
      transition('collapsed <=> expanded', animate('300ms ease-in-out')),
    ]),
  ],
})

export class LabEquipmentsComponent {
  
cardStates: string[] = [];
laboratoryEquipments = [
  { 
    title: 'Air Permeability Testers', 
    imageSrc: './assets/images/products/Low-Air-Permeability-Tester-LMAT-502-250x250.jpg', 
    altText: 'Air Permeability Tester', 
    subCategories: ['Air Permeability Tester', 'Fabric Air  Tester', 'Fabric Air Permeability ','Fabric  Permeability Tester','Low Air Permeability Tester'],
  },
  { 
    title: 'Air Sampler',
    imageSrc: './assets/images/products/Air-Sampler-LMAL-A100-250x250.jpg',
    altText: 'Air Sampler', 
    subCategories: ['Air Permeability Tester', 'Fabric Air Permeability Tester', 'Low Air Permeability Tester'],

  },
  { 
    title: 'Air Shower',
    imageSrc: './assets/images/products/Air-Shower-LMAS-501-250x250.jpg',
    altText: 'Air Sampler', 

  },
  { 
    title: 'Amino Acid Analyzer',
    imageSrc: './assets/images/products/Amino-Acid-Analyzer-LMAN-A100-250x250.jpg',
    altText: 'Air Sampler', 
    subCategories: ['Air Permeability Tester', 'Fabric Air Permeability Tester'],

  },
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
    subCategories: ['Air Permeability Tester', 'Fabric Air Permeability Tester', 'Low Air Permeability Tester'],

  },
  { 
    title: 'Air Shower',
    imageSrc: './assets/images/products/Air-Shower-LMAS-501-250x250.jpg',
    altText: 'Air Sampler', 
    subCategories: ['Air Permeability Tester', 'Fabric Air Permeability Tester', 'Low Air Permeability Tester','Air Permeability Tester', 'Fabric Air  Tester', 'Low Air Permeability Tester'],

  },
  { 
    title: 'Amino Acid Analyzer',
    imageSrc: './assets/images/products/Amino-Acid-Analyzer-LMAN-A100-250x250.jpg',
    altText: 'Air Sampler', 
    subCategories: ['Air Permeability Tester', 'Fabric Air Permeability Tester', 'Low Air Permeability Tester'],

  },
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
    subCategories: ['Air Permeability Tester', 'Fabric Air Permeability Tester', 'Low Air Permeability Tester'],

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
    subCategories: ['Air Permeability Tester', 'Fabric Air Permeability Tester', 'Low Air Permeability Tester'],

  },
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
    subCategories: ['Air Permeability Tester', 'Fabric Air Permeability Tester', 'Low Air Permeability Tester'],

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
    subCategories: ['Air Permeability Tester', 'Fabric Air Permeability Tester', 'Low Air Permeability Tester'],

  },
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
    subCategories: ['Air Permeability Tester', 'Fabric Air Permeability Tester', 'Low Air Permeability Tester'],

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
    subCategories: ['Air Permeability Tester', 'Fabric Air Permeability Tester', 'Low Air Permeability Tester'],

  },
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
    subCategories: ['Air Permeability Tester', 'Fabric Air Permeability Tester', 'Low Air Permeability Tester'],

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
    subCategories: ['Air Permeability Tester', 'Fabric Air Permeability Tester', 'Low Air Permeability Tester'],

  },
];

ngOnInit() {
  this.cardStates = new Array(this.laboratoryEquipments.length).fill('collapsed');
}

  toggle(index: number) {
    this.cardStates[index] = (this.cardStates[index] === 'collapsed') ? 'expanded' : 'collapsed';
  }
}
