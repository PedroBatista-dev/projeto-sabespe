import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessoIACTComponent } from './processo-iact.component';

describe('ProcessoIACTComponent', () => {
  let component: ProcessoIACTComponent;
  let fixture: ComponentFixture<ProcessoIACTComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProcessoIACTComponent]
    });
    fixture = TestBed.createComponent(ProcessoIACTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
