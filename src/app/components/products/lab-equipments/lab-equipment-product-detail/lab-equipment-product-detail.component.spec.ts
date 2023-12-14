import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabEquipmentProductDetailComponent } from './lab-equipment-product-detail.component';

describe('LabEquipmentProductDetailComponent', () => {
  let component: LabEquipmentProductDetailComponent;
  let fixture: ComponentFixture<LabEquipmentProductDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LabEquipmentProductDetailComponent]
    });
    fixture = TestBed.createComponent(LabEquipmentProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
