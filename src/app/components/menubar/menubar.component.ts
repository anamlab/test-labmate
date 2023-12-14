import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})

export class MenubarComponent {
  constructor(private route: ActivatedRoute, private router: Router) { }

  menuItems: string[] = ['Item1', 'Item2']
  labEquipmentsList: string[] = [
    'Air Permeability Testers',
    'Air Sampler',
    'Air Shower',
    'Amino Acid Analyzer',
    'Anaerobic Jar',
    'Autoclave',
    'Automated Stainer',
    'Ball Mill ',
    'Baths and Circulator',
    'Biological Safety Cabinet',
    'Blood Bag Sealer',
    'Blood Collection Monitor',
    'Blood Collection Tubes',
    'Blood Thaw Machine',
    'Calorimeter',
    'Cell Culture Consumables',
    'Centrifugal Extractor',
    'Centrifuge',
    'Centrifugeware',
    'Chiller',
    'Chlorophyll Meter',
    'Chromatograph',
  ];

  labSuppliesList: string[] = [
    'Air Permeability Testers',
    'Air Sampler',
    'Air Shower',
    'Amino Acid Analyzer',
    'Anaerobic Jar',
    'Autoclave',
    'Automated Stainer',
    'Ball Mill ',
    'Baths and Circulator',
    'Biological Safety Cabinet',
    'Blood Bag Sealer',
    'Blood Collection Monitor',
    'Blood Collection Tubes',
    'Blood Thaw Machine',
    'Calorimeter',
    'Cell Culture Consumables',
    'Centrifugal Extractor',
    'Centrifuge',
    'Centrifugeware',
    'Chiller',
    'Chlorophyll Meter',
    'Chromatograph',
  ];

    
  activeMenuItem: string | null = null;

  setActiveMenuItem(menuItem: string): void {
    this.activeMenuItem = menuItem;
  }

  forceRoute(category: string, item: string): void {
    const currentUrl = this.router.url;
    const routeParams = category === 'equipments' ? '/products/lab-equipments/product-details' : '/products/lab-supplies/product-details';
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([routeParams, item, { reload: new Date().getTime() }]);
    });

  }

}
