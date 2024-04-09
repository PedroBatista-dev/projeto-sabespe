import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilPoloTamanduateiComponent } from './perfil-polo-tamanduatei.component';

describe('PerfilPoloTamanduateiComponent', () => {
  let component: PerfilPoloTamanduateiComponent;
  let fixture: ComponentFixture<PerfilPoloTamanduateiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerfilPoloTamanduateiComponent]
    });
    fixture = TestBed.createComponent(PerfilPoloTamanduateiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
