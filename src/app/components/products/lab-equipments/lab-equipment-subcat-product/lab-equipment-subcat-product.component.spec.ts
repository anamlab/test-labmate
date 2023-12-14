import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabEquipmentSubcatProductComponent } from './lab-equipment-subcat-product.component';

describe('LabEquipmentSubcatProductComponent', () => {
  let component: LabEquipmentSubcatProductComponent;
  let fixture: ComponentFixture<LabEquipmentSubcatProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LabEquipmentSubcatProductComponent]
    });
    fixture = TestBed.createComponent(LabEquipmentSubcatProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
