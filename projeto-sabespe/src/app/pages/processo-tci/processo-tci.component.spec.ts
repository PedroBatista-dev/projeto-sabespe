import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessoTCIComponent } from './processo-tci.component';

describe('ProcessoTCIComponent', () => {
  let component: ProcessoTCIComponent;
  let fixture: ComponentFixture<ProcessoTCIComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProcessoTCIComponent]
    });
    fixture = TestBed.createComponent(ProcessoTCIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
