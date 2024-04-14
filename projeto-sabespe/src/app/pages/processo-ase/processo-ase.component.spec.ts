import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessoASEComponent } from './processo-ase.component';

describe('ProcessoASEComponent', () => {
  let component: ProcessoASEComponent;
  let fixture: ComponentFixture<ProcessoASEComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProcessoASEComponent]
    });
    fixture = TestBed.createComponent(ProcessoASEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
