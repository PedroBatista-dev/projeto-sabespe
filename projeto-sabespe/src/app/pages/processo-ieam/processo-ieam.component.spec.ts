import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessoIEAMComponent } from './processo-ieam.component';

describe('ProcessoIEAMComponent', () => {
  let component: ProcessoIEAMComponent;
  let fixture: ComponentFixture<ProcessoIEAMComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProcessoIEAMComponent]
    });
    fixture = TestBed.createComponent(ProcessoIEAMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
