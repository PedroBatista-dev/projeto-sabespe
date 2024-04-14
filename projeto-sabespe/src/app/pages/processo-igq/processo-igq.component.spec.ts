import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessoIGQComponent } from './processo-igq.component';

describe('ProcessoIGQComponent', () => {
  let component: ProcessoIGQComponent;
  let fixture: ComponentFixture<ProcessoIGQComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProcessoIGQComponent]
    });
    fixture = TestBed.createComponent(ProcessoIGQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
