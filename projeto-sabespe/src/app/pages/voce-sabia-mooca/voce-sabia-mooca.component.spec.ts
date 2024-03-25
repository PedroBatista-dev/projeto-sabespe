import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoceSabiaMoocaComponent } from './voce-sabia-mooca.component';

describe('VoceSabiaMoocaComponent', () => {
  let component: VoceSabiaMoocaComponent;
  let fixture: ComponentFixture<VoceSabiaMoocaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VoceSabiaMoocaComponent]
    });
    fixture = TestBed.createComponent(VoceSabiaMoocaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
