import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessoIORDComponent } from './processo-iord.component';

describe('ProcessoIORDComponent', () => {
  let component: ProcessoIORDComponent;
  let fixture: ComponentFixture<ProcessoIORDComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProcessoIORDComponent]
    });
    fixture = TestBed.createComponent(ProcessoIORDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
