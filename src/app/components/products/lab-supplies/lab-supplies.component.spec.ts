import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabSuppliesComponent } from './lab-supplies.component';

describe('LabSuppliesComponent', () => {
  let component: LabSuppliesComponent;
  let fixture: ComponentFixture<LabSuppliesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LabSuppliesComponent]
    });
    fixture = TestBed.createComponent(LabSuppliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
