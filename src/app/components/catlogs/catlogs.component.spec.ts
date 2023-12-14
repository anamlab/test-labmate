import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatlogsComponent } from './catlogs.component';

describe('CatlogsComponent', () => {
  let component: CatlogsComponent;
  let fixture: ComponentFixture<CatlogsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CatlogsComponent]
    });
    fixture = TestBed.createComponent(CatlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
