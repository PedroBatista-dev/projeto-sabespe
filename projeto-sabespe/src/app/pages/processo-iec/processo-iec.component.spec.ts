import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessoIECComponent } from './processo-iec.component';

describe('ProcessoIECComponent', () => {
  let component: ProcessoIECComponent;
  let fixture: ComponentFixture<ProcessoIECComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProcessoIECComponent]
    });
    fixture = TestBed.createComponent(ProcessoIECComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
