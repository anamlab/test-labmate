import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  constructor(
    private router: Router
  ){ }

  @Input() subtitle: string = ''; 
  @Input() imageSrc: string = ''; 
  @Input() altText: string = ''; 
  @Input() content: string = '';

  cardClicked(): void {
    this.router.navigate(['/products/lab-equipments/product-details',this.subtitle], { 
    });
  }

}
