import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabSuppliesProductDetailsComponent } from './lab-supplies-product-details.component';

describe('LabSuppliesProductDetailsComponent', () => {
  let component: LabSuppliesProductDetailsComponent;
  let fixture: ComponentFixture<LabSuppliesProductDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LabSuppliesProductDetailsComponent]
    });
    fixture = TestBed.createComponent(LabSuppliesProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
