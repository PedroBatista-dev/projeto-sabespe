import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilPoloMateusComponent } from './perfil-polo-mateus.component';

describe('PerfilPoloMateusComponent', () => {
  let component: PerfilPoloMateusComponent;
  let fixture: ComponentFixture<PerfilPoloMateusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerfilPoloMateusComponent]
    });
    fixture = TestBed.createComponent(PerfilPoloMateusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
