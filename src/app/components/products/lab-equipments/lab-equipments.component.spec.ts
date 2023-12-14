import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabEquipmentsComponent } from './lab-equipments.component';

describe('LabEquipmentsComponent', () => {
  let component: LabEquipmentsComponent;
  let fixture: ComponentFixture<LabEquipmentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LabEquipmentsComponent]
    });
    fixture = TestBed.createComponent(LabEquipmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
