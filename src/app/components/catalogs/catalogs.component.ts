import { Component, OnInit } from '@angular/core';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-catalogs',
  templateUrl: './catalogs.component.html',
  styleUrls: ['./catalogs.component.css']
})
export class CatalogsComponent implements OnInit {
  catalogs: { letter: string, names: string[] }[] = [];
  displayedCatalog: { letter: string, names: string[] } = { letter: 'A', names: [] };

  // Pagination variables
  currentPage: string = 'A';
  currentPageBatch: string[] = [];
  panelOpenState : boolean = false;

  ngOnInit(): void {
    this.generateCatalogs();
    this.updateDisplayedCatalog();
    this.updateCurrentPageBatch();
  }

  generateCatalogs(): void {
    const simulatedData = [
      { 
        letter: 'A', 
        names: [
          "ABBE Refractometer",
          "ABS Cell Strainer",
          "ABS Centrifuge Tube Rack",
          "ABS Cryovials Holder",
          "Adherent Cell Culture Flask",
          "Adherent Cell Culture Plate",
          "Advanced Thermal Cycler",
          "Aging Oven",
          "Air Cooled Chiller",
          "Air Permeability Tester",
          "Air Sampler",
          "Air Shower",
          "Amino Acid Analyzer",
          "Anaerobic Incubator",
        ],
      },
      { 
        letter: 'B',
        names: [
          "Ball Mill",
          "Bar-Coded Cryogenic Vials",
          "Belt Drive Vacuum Pump",
          "Bench Top pH Meter",
          "Bench Top Water Hardness Meter",
          "Bench-top Conductivity Meter",
          "Benchtop Turbidity Meter",
          "Biochemical Incubator",
          "Biochemistry Analyzer",
          "Biological Clean Bench",
          "Biological Microscope",
          "Blood Bank Centrifuge",
        ],
      },
      { 
        letter: 'C',
        names: [
          "Cell Scraper",
          "Cell Washing Centrifuge",
          "Centrifugal Extractor",
          "Chemical Storage Cabinet",
          "Chemiluminescence Imaging System",
          "Chlorophyll Meter",
          "Circulating Chiller",
          "Class B Tabletop Autoclave",
          "Class I Biosafety Cabinet",
          "Class II Type A2 Biosafety Cabinet",
          "Class II Type B2 Biosafety Cabinet",
          "Class III Biosafety Cabinet",
        ],
      },
    ];
    this.catalogs = simulatedData;
  }

  updateDisplayedCatalog(): void {
    this.displayedCatalog = this.catalogs.find(catalog => catalog.letter === this.currentPage) || { letter: '', names: []};
  }

  getLinksForCatalog(name: string): string[] {
    // Replace this with your logic to get links based on the name
    // For now, it returns a placeholder array.
    return ['ABBE Refractometer LMARF-A100', 'ABBE Refractometer LMARF-A101', 'ABBE Refractometer LMARF-A102']; 
  }
    
  onPageChange(newPage: string): void {
    if (newPage >= 'A' && newPage <= 'Z') {
      this.currentPage = newPage;
      this.updateDisplayedCatalog();
      this.updateCurrentPageBatch();
    }
  }

  getPagesArray(): string[] {
    return Array.from({ length: 26 }, (_, index) => String.fromCharCode(65 + index));
  }

  getPreviousPage(): string {
    const currentIndex = this.getIndexOfCurrentCatalog();
    const previousIndex = currentIndex > 0 ? currentIndex - 1 : 0;
    return this.getPagesArray()[previousIndex];
  }

  getNextPage(): string {
    const currentIndex = this.getIndexOfCurrentCatalog();
    const nextIndex = currentIndex < this.getPagesArray().length - 1 ? currentIndex + 1 : this.getPagesArray().length - 1;
    return this.getPagesArray()[nextIndex];
  }

  private getIndexOfCurrentCatalog(): number {
    return this.getPagesArray().indexOf(this.currentPage);
  }

  updateCurrentPageBatch(): void {
    const currentPageIndex = this.getPagesArray().indexOf(this.currentPage);
    const batchesToShow = 5; // Adjust the number of batches to show

    // Calculate the start and end index for the batches
    const startIndex = Math.max(0, currentPageIndex - Math.floor(batchesToShow / 2));
    const endIndex = Math.min(this.getPagesArray().length, startIndex + batchesToShow);

    // Update the current page batch
    this.currentPageBatch = this.getPagesArray().slice(startIndex, endIndex);
  }

  generatePDFContent(catalog: string): string {
    // Example: You can customize this with your actual PDF content
    catalog='' ;
    return `PDF content for ${catalog}`;
  }

  // Function to preview PDF
  // previewPDF(catalog: string): void {
  //   const pdfContent = this.generatePDFContent(catalog);
  //   // You can customize the preview mechanism based on your requirements
  //   console.log('Previewing PDF:', pdfContent);
  // }

  // Function to download PDF
  downloadPDF(catalog: string): void {
    const pdfContent = this.generatePDFContent(catalog);

    // Create PDF using jsPDF
    const pdf = new jsPDF();
    pdf.text(pdfContent, 10, 10);

    // Download PDF
    pdf.save(`${catalog}_catalog.pdf`);
  }
}