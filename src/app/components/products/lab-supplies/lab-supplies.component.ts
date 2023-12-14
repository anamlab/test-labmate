import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-lab-supplies',
  templateUrl: './lab-supplies.component.html',
  styleUrls: ['./lab-supplies.component.css'],
  animations: [
    trigger('bodyExpansion', [
      state('collapsed', style({ height: '0px', overflow: 'hidden' })),
      state('expanded', style({ height: '*' })),
      transition('collapsed <=> expanded', animate('300ms ease-in-out')),
    ]),
  ],
})
export class LabSuppliesComponent {

  cardStates :string[]= [];

  laboratorySupplies = [
    { 
      title: 'Blood Collection Tubes', 
      imageSrc: './assets/images/products/Glass-Tube-LMGLT-A100-250x250.jpg', 
      altText: 'Blood Collection Tubes', 
      subCategories: ['Clot Activator Glass Tubes',' Clot Activator PET Tubes','EDTA Glass Tubes','EDTA PET Tubes','Gel and Clot Activator Glass Tubes','Gel and Clot Activator PET Tubes','Glass Tube','Lithium Heparin Glass Tubes','Lithium Heparin PET Tubes','Micro Blood Collection Tube','Micro Blood Collection Tube (Capillary Type)','No Additive Glass Tubes','No Additive PET Tubes','Non-Vacuum Blood Collection Tube','Sodium Citrate PET Tubes','Sodium Heparin Glass Tubes','Sodium Heparin PET Tubes'],
    },
    { 
      title: 'Dispenser',
      imageSrc: './assets/images/products/Electronic-Bottle-Top-Dispenser-LMED-A100-250x250.jpg',
      altText: 'Dispenser', 
      subCategories: ['Bottle Top Dispenser',' Electronic Bottle Top Dispenser'],
    },
    { 
      title: 'Pipette and Pipettors',
      imageSrc: './assets/images/products/Pipette-Pump-LMPP-A100-250x250.jpg',
      altText: 'Pipette and Pipettors', 
      subCategories: ['Fixed Volume Fully Autoclavable Pipette','Fixed Volume Pipette','Pipette Controller','Pipette Pump','Polyethylene Transfer Pipettes',' Polystyrene Serological Pipettes','Single Channel Electronic pipette','Variable Volume Fully Autoclavable Pipette ',' Variable Volume Multi Channel Fully Autoclavable Pipettes','Variable Volume Multi Channel Pipettes','Variable Volume Pipettes'],

    },
    { 
      title: 'General Glass Labware',
      imageSrc: './assets/images/products/Glass-Tube-LMGLT-A100-250x250.jpg',
      altText: 'General Glass Labware', 
      subCategories: ['Flask','Glass Test Tube','Glass Volumetric Flask','Graduated Cylinder','Slides'],
    },
    { 
      title: 'Blood Collection Tubes', 
      imageSrc: './assets/images/products/Glass-Tube-LMGLT-A100-250x250.jpg', 
      altText: 'Blood Collection Tubes', 
      subCategories: ['Clot Activator Glass Tubes',' Clot Activator PET Tubes','EDTA Glass Tubes','EDTA PET Tubes','Gel and Clot Activator Glass Tubes','Gel and Clot Activator PET Tubes','Glass Tube','Lithium Heparin Glass Tubes','Lithium Heparin PET Tubes','Micro Blood Collection Tube','Micro Blood Collection Tube (Capillary Type)','No Additive Glass Tubes','No Additive PET Tubes','Non-Vacuum Blood Collection Tube','Sodium Citrate PET Tubes','Sodium Heparin Glass Tubes','Sodium Heparin PET Tubes'],
    },
    { 
      title: 'Dispenser',
      imageSrc: './assets/images/products/Electronic-Bottle-Top-Dispenser-LMED-A100-250x250.jpg',
      altText: 'Dispenser', 
      subCategories: ['Bottle Top Dispenser',' Electronic Bottle Top Dispenser'],
    },
    { 
      title: 'Pipette and Pipettors',
      imageSrc: './assets/images/products/Pipette-Pump-LMPP-A100-250x250.jpg',
      altText: 'Pipette and Pipettors', 
      subCategories: ['Fixed Volume Fully Autoclavable Pipette','Fixed Volume Pipette','Pipette Controller','Pipette Pump','Polyethylene Transfer Pipettes',' Polystyrene Serological Pipettes','Single Channel Electronic pipette','Variable Volume Fully Autoclavable Pipette ',' Variable Volume Multi Channel Fully Autoclavable Pipettes','Variable Volume Multi Channel Pipettes','Variable Volume Pipettes'],

    },
    { 
      title: 'General Glass Labware',
      imageSrc: './assets/images/products/Glass-Tube-LMGLT-A100-250x250.jpg',
      altText: 'General Glass Labware', 
      subCategories: ['Flask','Glass Test Tube','Glass Volumetric Flask','Graduated Cylinder','Slides'],
    },
    { 
      title: 'Blood Collection Tubes', 
      imageSrc: './assets/images/products/Glass-Tube-LMGLT-A100-250x250.jpg', 
      altText: 'Blood Collection Tubes', 
      subCategories: ['Clot Activator Glass Tubes',' Clot Activator PET Tubes','EDTA Glass Tubes','EDTA PET Tubes','Gel and Clot Activator Glass Tubes','Gel and Clot Activator PET Tubes','Glass Tube','Lithium Heparin Glass Tubes','Lithium Heparin PET Tubes','Micro Blood Collection Tube','Micro Blood Collection Tube (Capillary Type)','No Additive Glass Tubes','No Additive PET Tubes','Non-Vacuum Blood Collection Tube','Sodium Citrate PET Tubes','Sodium Heparin Glass Tubes','Sodium Heparin PET Tubes'],
    },
    { 
      title: 'Dispenser',
      imageSrc: './assets/images/products/Electronic-Bottle-Top-Dispenser-LMED-A100-250x250.jpg',
      altText: 'Dispenser', 
      subCategories: ['Bottle Top Dispenser',' Electronic Bottle Top Dispenser'],
    },
    { 
      title: 'Pipette and Pipettors',
      imageSrc: './assets/images/products/Pipette-Pump-LMPP-A100-250x250.jpg',
      altText: 'Pipette and Pipettors', 
      subCategories: ['Fixed Volume Fully Autoclavable Pipette','Fixed Volume Pipette','Pipette Controller','Pipette Pump','Polyethylene Transfer Pipettes',' Polystyrene Serological Pipettes','Single Channel Electronic pipette','Variable Volume Fully Autoclavable Pipette ',' Variable Volume Multi Channel Fully Autoclavable Pipettes','Variable Volume Multi Channel Pipettes','Variable Volume Pipettes'],

    },
    { 
      title: 'General Glass Labware',
      imageSrc: './assets/images/products/Glass-Tube-LMGLT-A100-250x250.jpg',
      altText: 'General Glass Labware', 
      subCategories: ['Flask','Glass Test Tube','Glass Volumetric Flask','Graduated Cylinder','Slides'],
    },
    { 
      title: 'Blood Collection Tubes', 
      imageSrc: './assets/images/products/Glass-Tube-LMGLT-A100-250x250.jpg', 
      altText: 'Blood Collection Tubes', 
      subCategories: ['Clot Activator Glass Tubes',' Clot Activator PET Tubes','EDTA Glass Tubes','EDTA PET Tubes','Gel and Clot Activator Glass Tubes','Gel and Clot Activator PET Tubes','Glass Tube','Lithium Heparin Glass Tubes','Lithium Heparin PET Tubes','Micro Blood Collection Tube','Micro Blood Collection Tube (Capillary Type)','No Additive Glass Tubes','No Additive PET Tubes','Non-Vacuum Blood Collection Tube','Sodium Citrate PET Tubes','Sodium Heparin Glass Tubes','Sodium Heparin PET Tubes'],
    },
    { 
      title: 'Dispenser',
      imageSrc: './assets/images/products/Electronic-Bottle-Top-Dispenser-LMED-A100-250x250.jpg',
      altText: 'Dispenser', 
      subCategories: ['Bottle Top Dispenser',' Electronic Bottle Top Dispenser'],
    },
    { 
      title: 'Pipette and Pipettors',
      imageSrc: './assets/images/products/Pipette-Pump-LMPP-A100-250x250.jpg',
      altText: 'Pipette and Pipettors', 
      subCategories: ['Fixed Volume Fully Autoclavable Pipette','Fixed Volume Pipette','Pipette Controller','Pipette Pump','Polyethylene Transfer Pipettes',' Polystyrene Serological Pipettes','Single Channel Electronic pipette','Variable Volume Fully Autoclavable Pipette ',' Variable Volume Multi Channel Fully Autoclavable Pipettes','Variable Volume Multi Channel Pipettes','Variable Volume Pipettes'],

    },
    { 
      title: 'General Glass Labware',
      imageSrc: './assets/images/products/Glass-Tube-LMGLT-A100-250x250.jpg',
      altText: 'General Glass Labware', 
      subCategories: ['Flask','Glass Test Tube','Glass Volumetric Flask','Graduated Cylinder','Slides'],
    },
    
  ];

  ngOnInit() {
    this.cardStates = new Array(this.laboratorySupplies.length).fill('collapsed');
  }
  
    toggle(index: number) {
      this.cardStates[index] = (this.cardStates[index] === 'collapsed') ? 'expanded' : 'collapsed';
    }
}
