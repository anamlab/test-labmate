import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';

// export interface ProductElements {
//   title: string;
//   imageSrc: string;
//   altText:string;
//   measureRange: string;
//   accuracy: string;
//   linearError: string;
//   measuringArea: string;
//   pressureDifference: string;
//   dimension: string;
//   weight: string;
//   airFlow: string;
//   power: string;
// }

// const ELEMENT_DATA: ProductElements[] = [

// ]


@Component({
  selector: 'app-product-compare',
  templateUrl: './product-compare.component.html',
  styleUrls: ['./product-compare.component.css']
})
export class ProductCompareComponent {
  titles: any;
  
  // dataSource = new MatTableDataSource<any>([]);
  products = [
    { 
      title: 'Air Permeability Testers', 
      imageSrc: './assets/images/products/Low-Air-Permeability-Tester-LMAT-502-250x250.jpg', 
      altText: 'Air Permeability Tester', 
      measureRange:'0 – 2500 ml/min, 0.01 – 42 µm/Pas' ,
      accuracy: '0.01 µm/(Pas), 0.06 ml/min, 0.1s',
      linearError: '<1%' ,
      measuringArea: '6.42 cm², 10 cm² (selectable)',
      pressureDifference:'0.05 KPa – 6 KPa',
      dimension	: '33×34×49 cm',      
      weight: '30kg',
      airFlow	: '-',
      power	: '-',
    },
    { 
      title: 'Air Permeability Tester', 
      imageSrc: './assets/images/products/Low-Air-Permeability-Tester-LMAT-502-250x250.jpg', 
      altText: 'Air Permeability Tester', 
      measureRange:'0 – 2500 ml/min, 0.01 – 42 µm/Pas' ,
      accuracy: '0.01 µm/(Pas), 0.06 ml/min, 0.1s',
      linearError: '<1%' ,
      measuringArea: '6.42 cm², 10 cm² (selectable)',
      pressureDifference:'0.05 KPa – 6 KPa',
      dimension	: '33×34×49 cm',      
      weight: '30kg',
      airFlow	: '-',
      power	: '-',
    },
    { 
      title: 'Air Sampler',
      imageSrc: './assets/images/products/Air-Sampler-LMAL-A100-250x250.jpg',
      altText: 'Air Sampler', 
      measureRange:'0 – 2500 ml/min, 0.01 – 42 µm/Pas' ,
      accuracy: '0.01 µm/(Pas), 0.06 ml/min, 0.1s',
      linearError: '<1%' ,
      measuringArea: '6.42 cm², 10 cm² (selectable)',
      pressureDifference:'0.05 KPa – 6 KPa',
      dimension	: '33×34×49 cm',      
      weight: '32kg',
      airFlow	: '-',
      power	: '-',    },
    { 
      title: 'Air Shower',
      imageSrc: './assets/images/products/Air-Shower-LMAS-501-250x250.jpg',
      altText: 'Air Sampler', 
      measureRange:'0 – 2500 ml/min, 0.01 – 42 µm/Pas' ,
      accuracy: '0.01 µm/(Pas), 0.06 ml/min, 0.1s',
      linearError: '<1%' ,
      measuringArea: '6.42 cm², 10 cm² (selectable)',
      pressureDifference:'0.05 KPa – 6 KPa',
      dimension	: '33×34×49 cm',      
      weight: '30kg',
      airFlow	: '-',
      power	: '-',    },
    { 
      title: 'Amino Acid Analyzer',
      imageSrc: './assets/images/products/Amino-Acid-Analyzer-LMAN-A100-250x250.jpg',
      altText: 'Air Sampler', 
      measureRange:'0 – 2500 ml/min, 0.01 – 42 µm/Pas' ,
      accuracy: '0.01 µm/(Pas), 0.06 ml/min, 0.1s',
      linearError: '<1%' ,
      measuringArea: '6.42 cm², 10 cm² (selectable)',
      pressureDifference:'0.05 KPa – 6 KPa',
      dimension	: '33×34×49 cm',      
      weight: '30kg',
      airFlow	: '-',
      power	: '-',
    },
    { 
      title: 'Clot Activator Glass Tubes', 
      imageSrc: './assets/images/products/Low-Air-Permeability-Tester-LMAT-502-250x250.jpg', 
      altText: 'Air Permeability Tester', 
      measureRange:'0 – 2500 ml/min, 0.01 – 42 µm/Pas' ,
      accuracy: '0.01 µm/(Pas), 0.06 ml/min, 0.1s',
      linearError: '<1%' ,
      measuringArea: '6.42 cm², 10 cm² (selectable)',
      pressureDifference:'0.05 KPa – 6 KPa',
      dimension	: '33×34×49 cm',      
      weight: '30kg',
      airFlow	: '-',
      power	: '-',
    },
    { 
      title: ' EDTA Glass Tubes', 
      imageSrc: './assets/images/products/Low-Air-Permeability-Tester-LMAT-502-250x250.jpg', 
      altText: 'Air Permeability Tester', 
      measureRange:'0 – 2500 ml/min, 0.01 – 42 µm/Pas' ,
      accuracy: '0.01 µm/(Pas), 0.06 ml/min, 0.1s',
      linearError: '<1%' ,
      measuringArea: '6.42 cm², 10 cm² (selectable)',
      pressureDifference:'0.05 KPa – 6 KPa',
      dimension	: '33×34×49 cm',      
      weight: '30kg',
      airFlow	: '-',
      power	: '-',
    },
    { 
      title: 'Clot Activator PET Tubes',
      imageSrc: './assets/images/products/Air-Sampler-LMAL-A100-250x250.jpg',
      altText: 'Air Sampler', 
      measureRange:'0 – 2500 ml/min, 0.01 – 42 µm/Pas' ,
      accuracy: '0.01 µm/(Pas), 0.06 ml/min, 0.1s',
      linearError: '<1%' ,
      measuringArea: '6.42 cm², 10 cm² (selectable)',
      pressureDifference:'0.05 KPa – 6 KPa',
      dimension	: '33×34×49 cm',      
      weight: '32kg',
      airFlow	: '-',
      power	: '-',    },
    { 
      title: 'Gel and Clot Activator Glass Tubes',
      imageSrc: './assets/images/products/Air-Shower-LMAS-501-250x250.jpg',
      altText: 'Air Sampler', 
      measureRange:'0 – 2500 ml/min, 0.01 – 42 µm/Pas' ,
      accuracy: '0.01 µm/(Pas), 0.06 ml/min, 0.1s',
      linearError: '<1%' ,
      measuringArea: '6.42 cm², 10 cm² (selectable)',
      pressureDifference:'0.05 KPa – 6 KPa',
      dimension	: '33×34×49 cm',      
      weight: '30kg',
      airFlow	: '-',
      power	: '-',    },
    { 
      title: 'Gel and Clot Activator Glass',
      imageSrc: './assets/images/products/Amino-Acid-Analyzer-LMAN-A100-250x250.jpg',
      altText: 'Air Sampler', 
      measureRange:'0 – 2500 ml/min, 0.01 – 42 µm/Pas' ,
      accuracy: '0.01 µm/(Pas), 0.06 ml/min, 0.1s',
      linearError: '<1%' ,
      measuringArea: '6.42 cm², 10 cm² (selectable)',
      pressureDifference:'0.05 KPa – 6 KPa',
      dimension	: '33×34×49 cm',      
      weight: '30kg',
      airFlow	: '-',
      power	: '-',
    },
    
  ];
  columnsToDisplay: string[] = [
    'title',
    'measureRange',
    'accuracy',
    'linearError',
    'measuringArea',
    'pressureDifference',
    'dimension',
    'weight',
    'airFlow',
    'power',
    'action'
  ];
  filteredProducts: MatTableDataSource<any> = new MatTableDataSource<any>();

  constructor(
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.titles = params['titles'];
      this.filteredProducts = new MatTableDataSource(this.products);
      this.updateProductList();
    });
  }

  updateProductList(): void {
    this.filteredProducts = new MatTableDataSource(
      this.products.filter(product => this.titles.includes(product.title))
    );
  }
  

  removeProduct(index: number): void {
    debugger
    if (this.filteredProducts.data) {
      this.filteredProducts.data.splice(index, 1);
      this.filteredProducts._updateChangeSubscription();
    }
  }
}
