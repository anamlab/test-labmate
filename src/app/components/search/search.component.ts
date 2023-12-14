import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  products = [
    { 
      name: 'Amino Acid Analyzer',
      id:1,
      imageSrc: './assets/images/products/Amino-Acid-Analyzer-LMAN-A100-250x250.jpg',
      altText: 'Air Sampler', 
      subCategories: ['Air Permeability Tester1', 'Fabric Air Permeability Tester1', 'Low Air Permeability Tester1'],
    },
    { 
      name: 'Air Permeability Testers', 
      id:2,
      imageSrc: './assets/images/products/Low-Air-Permeability-Tester-LMAT-502-250x250.jpg', 
      altText: 'Air Permeability Tester', 
      subCategories: ['Air Permeability Tester', 'Fabric Air Permeability Tester', 'Low Air Permeability Tester'],
    },
    { 
      name: 'Air Sampler',
      id:3,
      imageSrc: './assets/images/products/Air-Sampler-LMAL-A100-250x250.jpg',
      altText: 'Air Sampler', 
      subCategories: ['Air Permeability Tester', 'Fabric Air Permeability Tester', 'Low Air Permeability Tester'],
  
    },
    { 
      name: 'Air Permeability Tester', 
      id:4,
      imageSrc: './assets/images/products/Low-Air-Permeability-Tester-LMAT-502-250x250.jpg', 
      altText: 'Air Permeability Tester', 
      subCategories: ['Air Permeability Tester', 'Fabric Air Permeability Tester', 'Low Air Permeability Tester'],
    },
    { 
      name: 'Air Permeability Testers',
      id:1, 
      imageSrc: './assets/images/products/Low-Air-Permeability-Tester-LMAT-502-250x250.jpg', 
      altText: 'Air Permeability Tester', 
      subCategories: ['Air Permeability Tester', 'Fabric Air Permeability Tester', 'Low Air Permeability Tester'],
    },
    { 
      name: 'Air Sampler',
      id:2,
      imageSrc: './assets/images/products/Air-Sampler-LMAL-A100-250x250.jpg',
      altText: 'Air Sampler', 
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, tempore ducimus minima laudantium debitis numquam alias adipisci repudiandae quos tempora. Dignissimos nostrum harum voluptate provident. Exercitationem similique consequuntur amet dolorum.' 
    },
    { 
      name: 'Air Shower',
      id:1,
      imageSrc: './assets/images/products/Air-Shower-LMAS-501-250x250.jpg',
      altText: 'Air Sampler', 
      subCategories: ['Air Permeability Tester', 'Fabric Air Permeability Tester', 'Low Air Permeability Tester'],
    },
    { 
      name: 'Amino Acid Analyzer',
      id:1,
      imageSrc: './assets/images/products/Amino-Acid-Analyzer-LMAN-A100-250x250.jpg',
      altText: 'Air Sampler', 
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, tempore ducimus minima laudantium debitis numquam alias adipisci repudiandae quos tempora. Dignissimos nostrum harum voluptate provident. Exercitationem similique consequuntur amet dolorum.' 
    },
    { 
      name: 'Air Permeability Testers', 
      id:1,
      imageSrc: './assets/images/products/Low-Air-Permeability-Tester-LMAT-502-250x250.jpg', 
      altText: 'Air Permeability Tester', 
    },
    { 
      name: 'Air Sampler Testers',
      id:1,
      imageSrc: './assets/images/products/Air-Sampler-LMAL-A100-250x250.jpg',
      altText: 'Air Sampler', 
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, tempore ducimus minima laudantium debitis numquam alias adipisci repudiandae quos tempora. Dignissimos nostrum harum voluptate provident. Exercitationem similique consequuntur amet dolorum.' 
    },
    { 
      name: 'Air Shower',
      id:1,
      imageSrc: './assets/images/products/Air-Shower-LMAS-501-250x250.jpg',
      altText: 'Air Sampler', 
    },
    { 
      name: 'Amino Acid Analyzer',
      id:1,
      imageSrc: './assets/images/products/Amino-Acid-Analyzer-LMAN-A100-250x250.jpg',
      altText: 'Air Sampler', 
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, tempore ducimus minima laudantium debitis numquam alias adipisci repudiandae quos tempora. Dignissimos nostrum harum voluptate provident. Exercitationem similique consequuntur amet dolorum.' 
    },
    { 
      name: 'Ball Mill', 
      id:1,
      imageSrc: './assets/images/products/Low-Air-Permeability-Tester-LMAT-502-250x250.jpg', 
      altText: 'Air Permeability Tester', 
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, tempore ducimus minima laudantium debitis numquam alias adipisci repudiandae quos tempora. Dignissimos nostrum harum voluptate provident. Exercitationem similique consequuntur amet dolorum.'
    },
    { 
      name: 'Bar-Coded Cryogenic Vials',
      id:1,
      imageSrc: './assets/images/products/Air-Sampler-LMAL-A100-250x250.jpg',
      altText: 'Air Sampler', 
    },  
    { 
      name: 'Biological Safety Cabinet',
      id:1,
      imageSrc: './assets/images/products/Air-Shower-LMAS-501-250x250.jpg',
      altText: 'Air Sampler', 
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, tempore ducimus minima laudantium debitis numquam alias adipisci repudiandae quos tempora. Dignissimos nostrum harum voluptate provident. Exercitationem similique consequuntur amet dolorum.' 
    },
    { 
      name: ' Blood Bag Sealer',
      imageSrc: './assets/images/products/Amino-Acid-Analyzer-LMAN-A100-250x250.jpg',
      altText: 'Air Sampler', 
    },
    { 
      name: 'Biological Safety Cabinet',
      imageSrc: './assets/images/products/Air-Shower-LMAS-501-250x250.jpg',
      altText: 'Air Sampler', 
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, tempore ducimus minima laudantium debitis numquam alias adipisci repudiandae quos tempora. Dignissimos nostrum harum voluptate provident. Exercitationem similique consequuntur amet dolorum.' 
    },
    { 
      name: ' Blood Bag Sealer',
      imageSrc: './assets/images/products/Amino-Acid-Analyzer-LMAN-A100-250x250.jpg',
      altText: 'Air Sampler', 
      subCategories: ['Air Permeability Tester', 'Fabric Air Permeability Tester', 'Low Air Permeability Tester'],
    },
    { 
      name: 'Blood Collection Tubes', 
      imageSrc: './assets/images/products/Low-Air-Permeability-Tester-LMAT-502-250x250.jpg', 
      altText: 'Air Permeability Tester', 
      subCategories: [ 'Fabric Air Permeability Tester', 'Low Air Permeability Tester'],
    },
    { 
      name: 'Blood Thaw Machine',
      imageSrc: './assets/images/products/Air-Sampler-LMAL-A100-250x250.jpg',
      altText: 'Air Sampler', 
    },
    { 
      name: 'Blood Collection Monitor',
      imageSrc: './assets/images/products/Air-Shower-LMAS-501-250x250.jpg',
      altText: 'Air Sampler', 
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, tempore ducimus minima laudantium debitis numquam alias adipisci repudiandae quos tempora. Dignissimos nostrum harum voluptate provident. Exercitationem similique consequuntur amet dolorum.' 
    },
    { 
      name: 'Centrifugal Extractor',
      imageSrc: './assets/images/products/Amino-Acid-Analyzer-LMAN-A100-250x250.jpg',
      altText: 'Air Sampler', 
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, tempore ducimus minima laudantium debitis numquam alias adipisci repudiandae quos tempora. Dignissimos nostrum harum voluptate provident. Exercitationem similique consequuntur amet dolorum.' 
    },
    { 
      name: 'Centrifuge', 
      imageSrc: './assets/images/products/Low-Air-Permeability-Tester-LMAT-502-250x250.jpg', 
      altText: 'Air Permeability Tester', 
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, tempore ducimus minima laudantium debitis numquam alias adipisci repudiandae quos tempora. Dignissimos nostrum harum voluptate provident. Exercitationem similique consequuntur amet dolorum.'
    },
    { 
      name: 'Centrifugeware',
      imageSrc: './assets/images/products/Air-Sampler-LMAL-A100-250x250.jpg',
      altText: 'Air Sampler', 
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, tempore ducimus minima laudantium debitis numquam alias adipisci repudiandae quos tempora. Dignissimos nostrum harum voluptate provident. Exercitationem similique consequuntur amet dolorum.' 
    },
    { 
      name: 'Chiller',
      imageSrc: './assets/images/products/Air-Shower-LMAS-501-250x250.jpg',
      altText: 'Air Sampler', 
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, tempore ducimus minima laudantium debitis numquam alias adipisci repudiandae quos tempora. Dignissimos nostrum harum voluptate provident. Exercitationem similique consequuntur amet dolorum.' 
    },
    { 
      name: ' Chlorophyll Meter',
      imageSrc: './assets/images/products/Amino-Acid-Analyzer-LMAN-A100-250x250.jpg',
      altText: 'Air Sampler', 
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, tempore ducimus minima laudantium debitis numquam alias adipisci repudiandae quos tempora. Dignissimos nostrum harum voluptate provident. Exercitationem similique consequuntur amet dolorum.' 
    },
    { 
      name: 'Chromatography', 
      imageSrc: './assets/images/products/Low-Air-Permeability-Tester-LMAT-502-250x250.jpg', 
      altText: 'Air Permeability Tester', 
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, tempore ducimus minima laudantium debitis numquam alias adipisci repudiandae quos tempora. Dignissimos nostrum harum voluptate provident. Exercitationem similique consequuntur amet dolorum.'
    },
    { 
      name: 'Desiccator Dry Cabinet',
      imageSrc: './assets/images/products/Air-Sampler-LMAL-A100-250x250.jpg',
      altText: 'Air Sampler', 
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, tempore ducimus minima laudantium debitis numquam alias adipisci repudiandae quos tempora. Dignissimos nostrum harum voluptate provident. Exercitationem similique consequuntur amet dolorum.' 
    },
    { 
      name: 'ECG',
      imageSrc: './assets/images/products/Air-Shower-LMAS-501-250x250.jpg',
      altText: 'Air Sampler', 
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, tempore ducimus minima laudantium debitis numquam alias adipisci repudiandae quos tempora. Dignissimos nostrum harum voluptate provident. Exercitationem similique consequuntur amet dolorum.' 
    },
    { 
      name: 'Dry Heat Blood Transfusion Warmer',
      imageSrc: './assets/images/products/Amino-Acid-Analyzer-LMAN-A100-250x250.jpg',
      altText: 'Air Sampler', 
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, tempore ducimus minima laudantium debitis numquam alias adipisci repudiandae quos tempora. Dignissimos nostrum harum voluptate provident. Exercitationem similique consequuntur amet dolorum.' 
    },
    { 
      name: 'Evaporators', 
      imageSrc: './assets/images/products/Low-Air-Permeability-Tester-LMAT-502-250x250.jpg', 
      altText: 'Air Permeability Tester', 
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, tempore ducimus minima laudantium debitis numquam alias adipisci repudiandae quos tempora. Dignissimos nostrum harum voluptate provident. Exercitationem similique consequuntur amet dolorum.'
    },
    { 
      name: 'Electrophoresis System',
      imageSrc: './assets/images/products/Air-Sampler-LMAL-A100-250x250.jpg',
      altText: 'Air Sampler', 
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, tempore ducimus minima laudantium debitis numquam alias adipisci repudiandae quos tempora. Dignissimos nostrum harum voluptate provident. Exercitationem similique consequuntur amet dolorum.' 
    },
    { 
      name: 'Desiccator',
      imageSrc: './assets/images/products/Air-Shower-LMAS-501-250x250.jpg',
      altText: 'Air Sampler', 
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, tempore ducimus minima laudantium debitis numquam alias adipisci repudiandae quos tempora. Dignissimos nostrum harum voluptate provident. Exercitationem similique consequuntur amet dolorum.' 
    },
    { 
      name: 'Densitometer',
      imageSrc: './assets/images/products/Amino-Acid-Analyzer-LMAN-A100-250x250.jpg',
      altText: 'Air Sampler', 
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, tempore ducimus minima laudantium debitis numquam alias adipisci repudiandae quos tempora. Dignissimos nostrum harum voluptate provident. Exercitationem similique consequuntur amet dolorum.' 
    },
  ];

  topSearchProducts = [
    { 
      name: 'Amino Acid Analyzer',
      id:1,
    },
    { 
      name: 'Air Permeability Testers', 
      id:2,
    },
    { 
      name: 'Air Sampler',
      id:3,
    },
    { 
      name: 'Air Permeability Tester', 
      id:4,
    },
    { 
      name: 'Electrophoresis System',
      id:5,
    },
    { 
      name: 'Desiccator',
      id:6,
    },
    { 
      name: 'Densitometer',
      id:7,
    },
    { 
      name: 'Air Permeability Tester', 
      id:4,
    },
    { 
      name: 'Electrophoresis System',
      id:5,
    },
    { 
      name: 'Desiccator',
      id:6,
    },
    { 
      name: 'Densitometer',
      id:7,
    },
    
  ]

  filteredProducts: any[] = [];
  searchTerm: string = '';

  constructor(private router: Router, private route : ActivatedRoute) {
    this.filteredProducts = this.products;
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.searchTerm = params['searchItem'];
    });
    this.searchProduct();
  }

  searchProduct() {
    if (this.searchTerm.trim() !== '') {
      this.filteredProducts = this.products.filter(product =>
        product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
      console.log(this.filteredProducts);

    } else {
      this.filteredProducts = this.products;
      console.log(this.filteredProducts);

    }
  }

  viewDetails(title: string ,id : number) : void {    
    this.router.navigate(['products/product-details',id], { 
    });
  }
}
