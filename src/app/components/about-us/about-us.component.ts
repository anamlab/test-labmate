import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
  mainLinks: string[] = ['Autoclave', 'Laboratory Freezer', 'Chiller', 'Laboratory Clean Bench', 'Water Circulator', 'Colony Counter','Fume Hood', 'Laboratory Furnace', 'Centrifuge', 'Laboratory Incubator'];

  ngOnInit() {
    console.log('AboutUsComponent initialized');
  }
}
