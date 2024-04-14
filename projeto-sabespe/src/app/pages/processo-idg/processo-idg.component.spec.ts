import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessoIDGComponent } from './processo-idg.component';

describe('ProcessoIDGComponent', () => {
  let component: ProcessoIDGComponent;
  let fixture: ComponentFixture<ProcessoIDGComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProcessoIDGComponent]
    });
    fixture = TestBed.createComponent(ProcessoIDGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
