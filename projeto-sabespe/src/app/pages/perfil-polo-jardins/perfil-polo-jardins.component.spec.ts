import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilPoloJardinsComponent } from './perfil-polo-jardins.component';

describe('PerfilPoloJardinsComponent', () => {
  let component: PerfilPoloJardinsComponent;
  let fixture: ComponentFixture<PerfilPoloJardinsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerfilPoloJardinsComponent]
    });
    fixture = TestBed.createComponent(PerfilPoloJardinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
