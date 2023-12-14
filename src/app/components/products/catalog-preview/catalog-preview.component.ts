import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as pdfMake from 'pdfmake/build/pdfMake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

declare let html2pdf: any;

(pdfMake as any).vfs =pdfFonts.pdfMake.vfs;
 
@Component({
  selector: 'app-catalog-preview',
  templateUrl: './catalog-preview.component.html',
  styleUrls: ['./catalog-preview.component.css']
})
export class CatalogPreviewComponent {

  constructor(
    private route: ActivatedRoute,
  ) { }

  title : string = " ";
  catalogData: any[] = [
    { 
      imgSrc: "./assets/images/products/Air-Shower-LMAS-501-250x250.jpg",
      overviewContent: "Air Permeability Tester LMAT-501 adopts a high technology to measure the air permeability of various materials. The unit provides quick and straightforward results in the unit of measure of choice. It is a fully automated instrument controlled by a microcomputer with a 0 – 2500 ml/min measurement range and offers a 0.05 – 6 Kpa pressure difference range. The unit is equipped with an LCD screen and a micro-printer for fast and clear printing.",
      specifications: [{
        'Measuring Range'	: '0.1-12,000 mm/s at 20 cm² test area',
        'Units of Measure' :	'm³/m²/min, cm³/cm²/s, m³/m²/h, l/dm²/min, l/m²/s, mm/s, ft³/ft²/min, dm³/s',
        'Measuring Accuracy' : '≤±2%',
        'Test Pressure' : '1 – 4000 Pa (nozzle)',
        'Test Areas' :	'20 cm2 & 38.5 cm2 (standard), 5 cm2, 50 cm2, 100 cm2 (optional)',
        'Sample Thickness' :	'≤12 mm',
        'Power Supply' :	'220V, 50Hz or 110V, 60Hz',
        'Package Dimension' :	'780×620×1350 mm',
        'Net Weight' :	'75 Kg',
      }],
      features: [' Designed with microcomputer control','The whole test is fully automatic, fast, and accurate','Adopts an intelligent chip and load sensor to increase the test accuracy','Equipped with English menu LCD screen with soft touch buttons','Micro-printer, fast and clear printing','It can set pressure differences based on the permeability of the product','Data recording and processing functions'],
      applications: 'It is widely used in measuring air permeability of variety materials, such as paper, mica tape or other sheet objects etc.'
    }
  ];
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.title = params['title'];
      console.log(this.catalogData)
    });
  }
 
  generatePDF () {

    const element = document.querySelector('.download-pdf');
    const options = {
      filename: 'my-document.pdf',
      margin: 1,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
    };
    html2pdf().set(options).from(element).save();
  }
  
}
