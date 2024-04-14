import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessoIEPComponent } from './processo-iep.component';

describe('ProcessoIEPComponent', () => {
  let component: ProcessoIEPComponent;
  let fixture: ComponentFixture<ProcessoIEPComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProcessoIEPComponent]
    });
    fixture = TestBed.createComponent(ProcessoIEPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
