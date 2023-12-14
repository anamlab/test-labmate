import { Component } from '@angular/core';

@Component({
  selector: 'app-glance-products',
  templateUrl: './glance-products.component.html',
  styleUrls: ['./glance-products.component.css']
})
export class GlanceProductsComponent {
  
  showCardContent = false;

  toggleCardContent(): void {
    this.showCardContent = !this.showCardContent;
  }
}
