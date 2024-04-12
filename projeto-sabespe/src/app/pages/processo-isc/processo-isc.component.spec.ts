import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessoISCComponent } from './processo-isc.component';

describe('ProcessoISCComponent', () => {
  let component: ProcessoISCComponent;
  let fixture: ComponentFixture<ProcessoISCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProcessoISCComponent]
    });
    fixture = TestBed.createComponent(ProcessoISCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
