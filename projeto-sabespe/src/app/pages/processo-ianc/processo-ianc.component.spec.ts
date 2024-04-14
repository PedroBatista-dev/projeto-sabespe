import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessoIANCComponent } from './processo-ianc.component';

describe('ProcessoIANCComponent', () => {
  let component: ProcessoIANCComponent;
  let fixture: ComponentFixture<ProcessoIANCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProcessoIANCComponent]
    });
    fixture = TestBed.createComponent(ProcessoIANCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
