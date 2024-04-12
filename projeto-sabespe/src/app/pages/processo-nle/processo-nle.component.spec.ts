import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessoNLEComponent } from './processo-nle.component';

describe('ProcessoNLEComponent', () => {
  let component: ProcessoNLEComponent;
  let fixture: ComponentFixture<ProcessoNLEComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProcessoNLEComponent]
    });
    fixture = TestBed.createComponent(ProcessoNLEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
