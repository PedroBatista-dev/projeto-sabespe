import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilPoloIpirangaComponent } from './perfil-polo-ipiranga.component';

describe('PerfilPoloIpirangaComponent', () => {
  let component: PerfilPoloIpirangaComponent;
  let fixture: ComponentFixture<PerfilPoloIpirangaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerfilPoloIpirangaComponent]
    });
    fixture = TestBed.createComponent(PerfilPoloIpirangaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
