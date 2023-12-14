import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MaterialModule } from 'src/app/material/material.module';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  constructor(  
    private route: ActivatedRoute,
    private router: Router
    ) {}

  id:number=0;
  Products = [
    { 
      title: 'Amino Acid Analyzer',
      id:1,
      imageSrc: './assets/images/products/Amino-Acid-Analyzer-LMAN-A100-250x250.jpg',
      altText: 'Air Sampler', 
      subCategories: ['Air Permeability Tester', 'Fabric Air Permeability Tester'],
      description: "The Air Sampler is an exceptionally dependable device, meticulously crafted to ensure air sample purity. Its autoclavable sampling head guarantees the prevention of microbial contamination, while its adaptable volume capacity spans from 0.01 to 9.0 m³. The incorporation of numerous perforations in the sampling orifice results in an efficient flow rate of 0.38 m/s, offering a generous sampling volume of 100 L/min. This instrument is enriched with programmable capabilities that empower it to autonomously regulate sampling durations, affording users unparalleled convenience. Moreover, it provides a user-friendly interface through a digital display, enabling real-time monitoring and the adjustment of parameters, making it an indispensable tool for precise air quality assessment.",    
    },
    { 
      title: 'Air Permeability Testers', 
      id:2,
      imageSrc: './assets/images/products/Low-Air-Permeability-Tester-LMAT-502-250x250.jpg', 
      altText: 'Air Permeability Tester', 
      subCategories: ['Air Permeability Tester', 'Fabric Air  Tester', 'Fabric Air Permeability ','Fabric  Permeability Tester','Low Air Permeability Tester'],
      description: "Air Permeability Tester LMAT-501 adopts a high technology to measure the air permeability of various materials. The unit provides quick and straightforward results in the unit of measure of choice. It is a fully automated instrument controlled by a microcomputer with a 0 – 2500 ml/min measurement range and offers a 0.05 – 6 Kpa pressure difference range. The unit is equipped with an LCD screen and a micro-printer for fast and clear printing."
    },
    { 
      title: 'Air Sampler',
      id:3,
      imageSrc: './assets/images/products/Air-Sampler-LMAL-A100-250x250.jpg',
      altText: 'Air Sampler', 
      description: "The Air Sampler is an exceptionally dependable device, meticulously crafted to ensure air sample purity. Its autoclavable sampling head guarantees the prevention of microbial contamination, while its adaptable volume capacity spans from 0.01 to 9.0 m³. The incorporation of numerous perforations in the sampling orifice results in an efficient flow rate of 0.38 m/s, offering a generous sampling volume of 100 L/min. This instrument is enriched with programmable capabilities that empower it to autonomously regulate sampling durations, affording users unparalleled convenience. Moreover, it provides a user-friendly interface through a digital display, enabling real-time monitoring and the adjustment of parameters, making it an indispensable tool for precise air quality assessment.",
  
    },
    { 
      title: 'Air Shower',
      id:5,
      imageSrc: './assets/images/products/Air-Shower-LMAS-501-250x250.jpg',
      altText: 'Air Sampler', 
      description: "Air Permeability Tester LMAT-501 adopts a high technology to measure the air permeability of various materials. The unit provides quick and straightforward results in the unit of measure of choice. It is a fully automated instrument controlled by a microcomputer with a 0 – 2500 ml/min measurement range and offers a 0.05 – 6 Kpa pressure difference range. The unit is equipped with an LCD screen and a micro-printer for fast and clear printing."
    },
    { 
      title: 'Air Permeability Tester', 
      id:4,
      imageSrc: './assets/images/products/Low-Air-Permeability-Tester-LMAT-502-250x250.jpg', 
      altText: 'Air Permeability Tester', 
      description: "The Air Sampler is an exceptionally dependable device, meticulously crafted to ensure air sample purity. Its autoclavable sampling head guarantees the prevention of microbial contamination, while its adaptable volume capacity spans from 0.01 to 9.0 m³. The incorporation of numerous perforations in the sampling orifice results in an efficient flow rate of 0.38 m/s, offering a generous sampling volume of 100 L/min. This instrument is enriched with programmable capabilities that empower it to autonomously regulate sampling durations, affording users unparalleled convenience. Moreover, it provides a user-friendly interface through a digital display, enabling real-time monitoring and the adjustment of parameters, making it an indispensable tool for precise air quality assessment.",
      subCategories: ['Air Permeability Tester', 'Fabric Air Permeability Tester', 'Low Air Permeability Tester'],
    },
    { 
      title: 'Air Sampler',
      id:6,
      imageSrc: './assets/images/products/Air-Sampler-LMAL-A100-250x250.jpg',
      altText: 'Air Sampler', 
      subCategories: ['Air Permeability Tester', 'Fabric Air Permeability Tester', 'Low Air Permeability Tester'],
      description: "The Air Sampler is an exceptionally dependable device, meticulously crafted to ensure air sample purity. Its autoclavable sampling head guarantees the prevention of microbial contamination, while its adaptable volume capacity spans from 0.01 to 9.0 m³. The incorporation of numerous perforations in the sampling orifice results in an efficient flow rate of 0.38 m/s, offering a generous sampling volume of 100 L/min. This instrument is enriched with programmable capabilities that empower it to autonomously regulate sampling durations, affording users unparalleled convenience. Moreover, it provides a user-friendly interface through a digital display, enabling real-time monitoring and the adjustment of parameters, making it an indispensable tool for precise air quality assessment.",

    },
    { 
      title: 'Air Shower',
      id:6,
      imageSrc: './assets/images/products/Air-Shower-LMAS-501-250x250.jpg',
      altText: 'Air Sampler', 
      description: "Air Permeability Tester LMAT-501 adopts a high technology to measure the air permeability of various materials. The unit provides quick and straightforward results in the unit of measure of choice. It is a fully automated instrument controlled by a microcomputer with a 0 – 2500 ml/min measurement range and offers a 0.05 – 6 Kpa pressure difference range. The unit is equipped with an LCD screen and a micro-printer for fast and clear printing.",
      subCategories: ['Air Permeability Tester', 'Fabric Air Permeability Tester', 'Low Air Permeability Tester','Air Permeability Tester', 'Fabric Air  Tester', 'Low Air Permeability Tester'],
  
    },
    { 
      title: 'Amino Acid Analyzer',
      id:7,
      imageSrc: './assets/images/products/Amino-Acid-Analyzer-LMAN-A100-250x250.jpg',
      altText: 'Air Sampler',
      description: "The Air Sampler is an exceptionally dependable device, meticulously crafted to ensure air sample purity. Its autoclavable sampling head guarantees the prevention of microbial contamination, while its adaptable volume capacity spans from 0.01 to 9.0 m³. The incorporation of numerous perforations in the sampling orifice results in an efficient flow rate of 0.38 m/s, offering a generous sampling volume of 100 L/min. This instrument is enriched with programmable capabilities that empower it to autonomously regulate sampling durations, affording users unparalleled convenience. Moreover, it provides a user-friendly interface through a digital display, enabling real-time monitoring and the adjustment of parameters, making it an indispensable tool for precise air quality assessment.", 
      subCategories: ['Air Permeability Tester', 'Fabric Air Permeability Tester', 'Low Air Permeability Tester'],
    },
   
  ];

  dataSource: any[]=  [
    { name: 'Sampling Volume', value: '100 L/min'},
    { name: 'Sampling Quantity', value: '0.01 to 9.0 m³'},
    { name: 'Sampling Time', value: 'Automatic'},
    { name: 'Flow Velocity of Sampling Holes', value: '0.38 m/'},
    { name: 'Sampling', value: 'Low Noise pump sampling'},
    { name: 'Petri Dish Diameter', value: 'Ø 90 × 15 mm'},
    { name: 'Power Supply', value: 'AC 110/220V±10%50/60Hz'},
    { name: 'Rechargeable Battery', value: 'DC 14.8 V / 5000 mAh'},
    { name: 'Operational Time of Battery', value: '235 × 220 × 180 mm'},
    { name: 'Data Storage', value: '256 Sample'},
    { name: 'Internal Dimension', value: '6 to 8 h'},
    { name: 'Fluorine', value: 'DC 14.8 V / 5000 mAh'},
    { name: 'External Dimension', value: '400 × 430 × 240 mm'},
    { name: 'Net value', value: '4.8 Kg'},
    { name: 'Gross value', value: '8.5 Kg'},
  ];

  relatedProducts = [
    { 
      title: 'Air Shower',
      id:1,
      imageSrc: './assets/images/products/Air-Shower-LMAS-501-250x250.jpg',
      altText: 'Air Sampler', 
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, tempore ducimus minima laudantium debitis numquam alias adipisci repudiandae quos tempora. Dignissimos nostrum harum voluptate provident. Exercitationem similique consequuntur amet dolorum.' 
    },
    { 
      title: 'Air Sampler',
      id:2,
      imageSrc: './assets/images/products/Air-Sampler-LMAL-A100-250x250.jpg',
      altText: 'Air Sampler', 
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, tempore ducimus minima laudantium debitis numquam alias adipisci repudiandae quos tempora. Dignissimos nostrum harum voluptate provident. Exercitationem similique consequuntur amet dolorum.' 
    },
    { 
      title: 'Amino Acid Analyzer',
      id:3,
      imageSrc: './assets/images/products/Amino-Acid-Analyzer-LMAN-A100-250x250.jpg',
      altText: 'Air Sampler', 
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, tempore ducimus minima laudantium debitis numquam alias adipisci repudiandae quos tempora. Dignissimos nostrum harum voluptate provident. Exercitationem similique consequuntur amet dolorum.' 
    },
    { 
      title: 'Air Permeability Testers', 
      id:4,
      imageSrc: './assets/images/products/Low-Air-Permeability-Tester-LMAT-502-250x250.jpg', 
      altText: 'Air Permeability Tester', 
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, tempore ducimus minima laudantium debitis numquam alias adipisci repudiandae quos tempora. Dignissimos nostrum harum voluptate provident. Exercitationem similique consequuntur amet dolorum.'
    },

  ] 
  product:any;
  isOpen: boolean = false;
  tabs = [
    {  title : "Specifications",
       content : [],
       tableData: this.dataSource,
    },
    {  title : "Features",
       content : [
        'Energy-efficient microprocessor control systems ensure accurate and reproducible results',
        ' Enhanced with 256 sample data storage for safe and reliable monitoring',
        ' Designed with SUS304 stainless steel provides safety and long-term usability',
        ' Configured with an LCD display for easy monitoring of working parameters',
        ' Improved with a rechargeable battery with 6 to 8 hours of battery backup ',
        ' Supplied with multi-jet holes particle impact includes the isokinetic sampling principle',
        ' Upgraded with user-friendly programmable operation that satisfies a variety of user needs',
        ' Animalcule count performed with accuracy and precision by a highly effective, stable, and dependable unit ',
        ' Tool-free cleaning with safety and sanitation',
        ' Worry-free maintenance with simple handling',
        ' Emit low noise for better working conditions'
       ],
    },
    { title : "Applications",
      content : ['It is used for quality inspection across the food & biological product industry, hospitals, drug/medicines manufacturing plants, etc.'],
    },
    { title : "Catalog",
    },
];
  
  
ngOnInit(){
    this.route.params.subscribe(params => {
      console.log(params)
      this.id = +params['id'];
    });
    // alert(this.id)
    this.product = this.Products.find(product => product.id === this.id);
    if (!this.product) {
      console.error(`Product with id ${this.id} not found.`);
    }
  }
  
  viewDetails(title: string ,id : number) : void {    
    this.router.navigate(['products/product-details',id], { 
    });
  }

  openForm() {
    this.isOpen = true;
  }
  onSubmit() {
  }
}
