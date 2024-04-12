import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessoNLAComponent } from './processo-nla.component';

describe('ProcessoNLAComponent', () => {
  let component: ProcessoNLAComponent;
  let fixture: ComponentFixture<ProcessoNLAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProcessoNLAComponent]
    });
    fixture = TestBed.createComponent(ProcessoNLAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
