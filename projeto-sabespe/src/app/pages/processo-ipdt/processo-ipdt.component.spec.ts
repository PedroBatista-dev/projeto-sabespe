import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessoIPDTComponent } from './processo-ipdt.component';

describe('ProcessoIPDTComponent', () => {
  let component: ProcessoIPDTComponent;
  let fixture: ComponentFixture<ProcessoIPDTComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProcessoIPDTComponent]
    });
    fixture = TestBed.createComponent(ProcessoIPDTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
