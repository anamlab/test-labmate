import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabSuppliesSubcatProductsComponent } from './lab-supplies-subcat-products.component';

describe('LabSuppliesSubcatProductsComponent', () => {
  let component: LabSuppliesSubcatProductsComponent;
  let fixture: ComponentFixture<LabSuppliesSubcatProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LabSuppliesSubcatProductsComponent]
    });
    fixture = TestBed.createComponent(LabSuppliesSubcatProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
