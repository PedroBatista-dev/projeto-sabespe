import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessoIVVComponent } from './processo-ivv.component';

describe('ProcessoIVVComponent', () => {
  let component: ProcessoIVVComponent;
  let fixture: ComponentFixture<ProcessoIVVComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProcessoIVVComponent]
    });
    fixture = TestBed.createComponent(ProcessoIVVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
