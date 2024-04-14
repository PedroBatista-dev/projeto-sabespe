import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessoIRFAComponent } from './processo-irfa.component';

describe('ProcessoIRFAComponent', () => {
  let component: ProcessoIRFAComponent;
  let fixture: ComponentFixture<ProcessoIRFAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProcessoIRFAComponent]
    });
    fixture = TestBed.createComponent(ProcessoIRFAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
