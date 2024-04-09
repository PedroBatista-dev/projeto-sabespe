import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilPoloMoocaComponent } from './perfil-polo-mooca.component';

describe('PerfilPoloMoocaComponent', () => {
  let component: PerfilPoloMoocaComponent;
  let fixture: ComponentFixture<PerfilPoloMoocaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerfilPoloMoocaComponent]
    });
    fixture = TestBed.createComponent(PerfilPoloMoocaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
