import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { NgZone } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private el: ElementRef,private zone: NgZone) {}
  
  products = [
    { 
      subtitle: 'Air Permeability Testers', 
      imageSrc: './assets/images/products/Low-Air-Permeability-Tester-LMAT-502-250x250.jpg', 
      altText: 'Air Permeability Tester', 
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, tempore ducimus minima laudantium debitis numquam alias adipisci repudiandae quos tempora. Dignissimos nostrum harum voluptate provident. Exercitationem similique consequuntur amet dolorum.'
    },
    { 
      subtitle: 'Air Sampler',
      imageSrc: './assets/images/products/Air-Sampler-LMAL-A100-250x250.jpg',
      altText: 'Air Sampler', 
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, tempore ducimus minima laudantium debitis numquam alias adipisci repudiandae quos tempora. Dignissimos nostrum harum voluptate provident. Exercitationem similique consequuntur amet dolorum.' 
    },
    { 
      subtitle: 'Air Shower',
      imageSrc: './assets/images/products/Air-Shower-LMAS-501-250x250.jpg',
      altText: 'Air Sampler', 
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, tempore ducimus minima laudantium debitis numquam alias adipisci repudiandae quos tempora. Dignissimos nostrum harum voluptate provident. Exercitationem similique consequuntur amet dolorum.' 
    },
    { 
      subtitle: 'Amino Acid Analyzer',
      imageSrc: './assets/images/products/Amino-Acid-Analyzer-LMAN-A100-250x250.jpg',
      altText: 'Air Sampler', 
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, tempore ducimus minima laudantium debitis numquam alias adipisci repudiandae quos tempora. Dignissimos nostrum harum voluptate provident. Exercitationem similique consequuntur amet dolorum.' 
    },
    { 
      subtitle: 'Air Permeability Testers', 
      imageSrc: './assets/images/products/Low-Air-Permeability-Tester-LMAT-502-250x250.jpg', 
      altText: 'Air Permeability Tester', 
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, tempore ducimus minima laudantium debitis numquam alias adipisci repudiandae quos tempora. Dignissimos nostrum harum voluptate provident. Exercitationem similique consequuntur amet dolorum.'
    },
    { 
      subtitle: 'Air Sampler',
      imageSrc: './assets/images/products/Air-Sampler-LMAL-A100-250x250.jpg',
      altText: 'Air Sampler', 
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, tempore ducimus minima laudantium debitis numquam alias adipisci repudiandae quos tempora. Dignissimos nostrum harum voluptate provident. Exercitationem similique consequuntur amet dolorum.' 
    },
    { 
      subtitle: 'Air Shower',
      imageSrc: './assets/images/products/Air-Shower-LMAS-501-250x250.jpg',
      altText: 'Air Sampler', 
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, tempore ducimus minima laudantium debitis numquam alias adipisci repudiandae quos tempora. Dignissimos nostrum harum voluptate provident. Exercitationem similique consequuntur amet dolorum.' 
    },
    { 
      subtitle: 'Amino Acid Analyzer',
      imageSrc: './assets/images/products/Amino-Acid-Analyzer-LMAN-A100-250x250.jpg',
      altText: 'Air Sampler', 
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, tempore ducimus minima laudantium debitis numquam alias adipisci repudiandae quos tempora. Dignissimos nostrum harum voluptate provident. Exercitationem similique consequuntur amet dolorum.' 
    },
    { 
      subtitle: 'Air Permeability Testers', 
      imageSrc: './assets/images/products/Low-Air-Permeability-Tester-LMAT-502-250x250.jpg', 
      altText: 'Air Permeability Tester', 
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, tempore ducimus minima laudantium debitis numquam alias adipisci repudiandae quos tempora. Dignissimos nostrum harum voluptate provident. Exercitationem similique consequuntur amet dolorum.'
    },
    { 
      subtitle: 'Air Sampler',
      imageSrc: './assets/images/products/Air-Sampler-LMAL-A100-250x250.jpg',
      altText: 'Air Sampler', 
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, tempore ducimus minima laudantium debitis numquam alias adipisci repudiandae quos tempora. Dignissimos nostrum harum voluptate provident. Exercitationem similique consequuntur amet dolorum.' 
    },
    { 
      subtitle: 'Air Shower',
      imageSrc: './assets/images/products/Air-Shower-LMAS-501-250x250.jpg',
      altText: 'Air Sampler', 
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, tempore ducimus minima laudantium debitis numquam alias adipisci repudiandae quos tempora. Dignissimos nostrum harum voluptate provident. Exercitationem similique consequuntur amet dolorum.' 
    },
    { 
      subtitle: 'Amino Acid Analyzer',
      imageSrc: './assets/images/products/Amino-Acid-Analyzer-LMAN-A100-250x250.jpg',
      altText: 'Air Sampler', 
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, tempore ducimus minima laudantium debitis numquam alias adipisci repudiandae quos tempora. Dignissimos nostrum harum voluptate provident. Exercitationem similique consequuntur amet dolorum.' 
    },
    { 
      subtitle: 'Air Permeability Testers', 
      imageSrc: './assets/images/products/Low-Air-Permeability-Tester-LMAT-502-250x250.jpg', 
      altText: 'Air Permeability Tester', 
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, tempore ducimus minima laudantium debitis numquam alias adipisci repudiandae quos tempora. Dignissimos nostrum harum voluptate provident. Exercitationem similique consequuntur amet dolorum.'
    },
    { 
      subtitle: 'Air Sampler',
      imageSrc: './assets/images/products/Air-Sampler-LMAL-A100-250x250.jpg',
      altText: 'Air Sampler', 
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, tempore ducimus minima laudantium debitis numquam alias adipisci repudiandae quos tempora. Dignissimos nostrum harum voluptate provident. Exercitationem similique consequuntur amet dolorum.' 
    },
    { 
      subtitle: 'Air Shower',
      imageSrc: './assets/images/products/Air-Shower-LMAS-501-250x250.jpg',
      altText: 'Air Sampler', 
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, tempore ducimus minima laudantium debitis numquam alias adipisci repudiandae quos tempora. Dignissimos nostrum harum voluptate provident. Exercitationem similique consequuntur amet dolorum.' 
    },
    { 
      subtitle: 'Amino Acid Analyzer',
      imageSrc: './assets/images/products/Amino-Acid-Analyzer-LMAN-A100-250x250.jpg',
      altText: 'Air Sampler', 
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, tempore ducimus minima laudantium debitis numquam alias adipisci repudiandae quos tempora. Dignissimos nostrum harum voluptate provident. Exercitationem similique consequuntur amet dolorum.' 
    },
    { 
      subtitle: 'Air Permeability Testers', 
      imageSrc: './assets/images/products/Low-Air-Permeability-Tester-LMAT-502-250x250.jpg', 
      altText: 'Air Permeability Tester', 
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, tempore ducimus minima laudantium debitis numquam alias adipisci repudiandae quos tempora. Dignissimos nostrum harum voluptate provident. Exercitationem similique consequuntur amet dolorum.'
    },
    { 
      subtitle: 'Air Sampler',
      imageSrc: './assets/images/products/Air-Sampler-LMAL-A100-250x250.jpg',
      altText: 'Air Sampler', 
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, tempore ducimus minima laudantium debitis numquam alias adipisci repudiandae quos tempora. Dignissimos nostrum harum voluptate provident. Exercitationem similique consequuntur amet dolorum.' 
    },
    { 
      subtitle: 'Air Shower',
      imageSrc: './assets/images/products/Air-Shower-LMAS-501-250x250.jpg',
      altText: 'Air Sampler', 
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, tempore ducimus minima laudantium debitis numquam alias adipisci repudiandae quos tempora. Dignissimos nostrum harum voluptate provident. Exercitationem similique consequuntur amet dolorum.' 
    },
    { 
      subtitle: 'Amino Acid Analyzer',
      imageSrc: './assets/images/products/Amino-Acid-Analyzer-LMAN-A100-250x250.jpg',
      altText: 'Air Sampler', 
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, tempore ducimus minima laudantium debitis numquam alias adipisci repudiandae quos tempora. Dignissimos nostrum harum voluptate provident. Exercitationem similique consequuntur amet dolorum.' 
    },
    { 
      subtitle: 'Air Permeability Testers', 
      imageSrc: './assets/images/products/Low-Air-Permeability-Tester-LMAT-502-250x250.jpg', 
      altText: 'Air Permeability Tester', 
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, tempore ducimus minima laudantium debitis numquam alias adipisci repudiandae quos tempora. Dignissimos nostrum harum voluptate provident. Exercitationem similique consequuntur amet dolorum.'
    },
    { 
      subtitle: 'Air Sampler',
      imageSrc: './assets/images/products/Air-Sampler-LMAL-A100-250x250.jpg',
      altText: 'Air Sampler', 
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, tempore ducimus minima laudantium debitis numquam alias adipisci repudiandae quos tempora. Dignissimos nostrum harum voluptate provident. Exercitationem similique consequuntur amet dolorum.' 
    },
    { 
      subtitle: 'Air Shower',
      imageSrc: './assets/images/products/Air-Shower-LMAS-501-250x250.jpg',
      altText: 'Air Sampler', 
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, tempore ducimus minima laudantium debitis numquam alias adipisci repudiandae quos tempora. Dignissimos nostrum harum voluptate provident. Exercitationem similique consequuntur amet dolorum.' 
    },
    { 
      subtitle: 'Amino Acid Analyzer',
      imageSrc: './assets/images/products/Amino-Acid-Analyzer-LMAN-A100-250x250.jpg',
      altText: 'Air Sampler', 
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, tempore ducimus minima laudantium debitis numquam alias adipisci repudiandae quos tempora. Dignissimos nostrum harum voluptate provident. Exercitationem similique consequuntur amet dolorum.' 
    },
  ];

  prod1 = [
    { 
      subtitle: 'Air Permeability Testers', 
      imageSrc: './assets/images/products/Low-Air-Permeability-Tester-LMAT-502-250x250.jpg', 
      altText: 'Air Permeability Tester', 
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, tempore ducimus minima laudantium debitis numquam alias adipisci repudiandae quos tempora. Dignissimos nostrum harum voluptate provident. Exercitationem similique consequuntur amet dolorum.'
    },
    { 
      subtitle: 'Air Sampler',
      imageSrc: './assets/images/products/Air-Sampler-LMAL-A100-250x250.jpg',
      altText: 'Air Sampler', 
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, tempore ducimus minima laudantium debitis numquam alias adipisci repudiandae quos tempora. Dignissimos nostrum harum voluptate provident. Exercitationem similique consequuntur amet dolorum.' 
    },
  ]
  prod2 = [
    { 
      subtitle: 'Air Shower',
      imageSrc: './assets/images/products/Air-Shower-LMAS-501-250x250.jpg',
      altText: 'Air Sampler', 
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, tempore ducimus minima laudantium debitis numquam alias adipisci repudiandae quos tempora. Dignissimos nostrum harum voluptate provident. Exercitationem similique consequuntur amet dolorum.' 
    },
    { 
      subtitle: 'Amino Acid Analyzer',
      imageSrc: './assets/images/products/Amino-Acid-Analyzer-LMAN-A100-250x250.jpg',
      altText: 'Air Sampler', 
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, tempore ducimus minima laudantium debitis numquam alias adipisci repudiandae quos tempora. Dignissimos nostrum harum voluptate provident. Exercitationem similique consequuntur amet dolorum.' 
    },
  ] 
  prod3 = [
    { 
      subtitle: 'Air Shower',
      imageSrc: './assets/images/products/Air-Shower-LMAS-501-250x250.jpg',
      altText: 'Air Sampler', 
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, tempore ducimus minima laudantium debitis numquam alias adipisci repudiandae quos tempora. Dignissimos nostrum harum voluptate provident. Exercitationem similique consequuntur amet dolorum.' 
    },
    { 
      subtitle: 'Air Sampler',
      imageSrc: './assets/images/products/Air-Sampler-LMAL-A100-250x250.jpg',
      altText: 'Air Sampler', 
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, tempore ducimus minima laudantium debitis numquam alias adipisci repudiandae quos tempora. Dignissimos nostrum harum voluptate provident. Exercitationem similique consequuntur amet dolorum.' 
    },
    { 
      subtitle: 'Air Shower',
      imageSrc: './assets/images/products/Air-Shower-LMAS-501-250x250.jpg',
      altText: 'Air Sampler', 
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, tempore ducimus minima laudantium debitis numquam alias adipisci repudiandae quos tempora. Dignissimos nostrum harum voluptate provident. Exercitationem similique consequuntur amet dolorum.' 
    },
    { 
      subtitle: 'Amino Acid Analyzer',
      imageSrc: './assets/images/products/Amino-Acid-Analyzer-LMAN-A100-250x250.jpg',
      altText: 'Air Sampler', 
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, tempore ducimus minima laudantium debitis numquam alias adipisci repudiandae quos tempora. Dignissimos nostrum harum voluptate provident. Exercitationem similique consequuntur amet dolorum.' 
    },
    { 
      subtitle: 'Air Permeability Testers', 
      imageSrc: './assets/images/products/Low-Air-Permeability-Tester-LMAT-502-250x250.jpg', 
      altText: 'Air Permeability Tester', 
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, tempore ducimus minima laudantium debitis numquam alias adipisci repudiandae quos tempora. Dignissimos nostrum harum voluptate provident. Exercitationem similique consequuntur amet dolorum.'
    },

  ] 
  tabs = [
     {  title : "PCR System",
        content : this.prod1
     },
     {  title : "Hydraulic Press",
        content : this.prod2
    },
    { title : "Data logger",
        content : this.prod3
    } ,
];

 ngOnInit() {
 }
 ngAfterViewInit(): void {
  const carouselElement = this.el.nativeElement.querySelector('#carouselExampleControls');
  
  if (typeof $ !== 'undefined') {
    this.zone.run(() => {
      $(carouselElement).on('slid.bs.carousel', () => {
        console.log('Carousel slide changed');
        // Add your logic here for when a new slide is displayed
      });
    });
  } else {
    console.error('jQuery is not defined. Make sure it is loaded.');
  }
}

}
