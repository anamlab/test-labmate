import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AskExpertComponent } from './ask-expert.component';

describe('AskExpertComponent', () => {
  let component: AskExpertComponent;
  let fixture: ComponentFixture<AskExpertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AskExpertComponent]
    });
    fixture = TestBed.createComponent(AskExpertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
