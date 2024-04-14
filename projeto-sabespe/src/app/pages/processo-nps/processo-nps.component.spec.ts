import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessoNPSComponent } from './processo-nps.component';

describe('ProcessoNPSComponent', () => {
  let component: ProcessoNPSComponent;
  let fixture: ComponentFixture<ProcessoNPSComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProcessoNPSComponent]
    });
    fixture = TestBed.createComponent(ProcessoNPSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
