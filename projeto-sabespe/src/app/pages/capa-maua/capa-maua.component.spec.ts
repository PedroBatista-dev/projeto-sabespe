import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapaMauaComponent } from './capa-maua.component';

describe('CapaMauaComponent', () => {
  let component: CapaMauaComponent;
  let fixture: ComponentFixture<CapaMauaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CapaMauaComponent]
    });
    fixture = TestBed.createComponent(CapaMauaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
