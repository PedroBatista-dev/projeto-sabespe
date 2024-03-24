import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilCentroComponent } from './perfil-centro.component';

describe('PerfilCentroComponent', () => {
  let component: PerfilCentroComponent;
  let fixture: ComponentFixture<PerfilCentroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerfilCentroComponent]
    });
    fixture = TestBed.createComponent(PerfilCentroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
