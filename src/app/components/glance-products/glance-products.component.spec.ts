import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlanceProductsComponent } from './glance-products.component';

describe('GlanceProductsComponent', () => {
  let component: GlanceProductsComponent;
  let fixture: ComponentFixture<GlanceProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GlanceProductsComponent]
    });
    fixture = TestBed.createComponent(GlanceProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
