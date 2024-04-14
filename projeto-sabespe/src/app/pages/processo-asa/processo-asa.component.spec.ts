import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessoASAComponent } from './processo-asa.component';

describe('ProcessoASAComponent', () => {
  let component: ProcessoASAComponent;
  let fixture: ComponentFixture<ProcessoASAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProcessoASAComponent]
    });
    fixture = TestBed.createComponent(ProcessoASAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
