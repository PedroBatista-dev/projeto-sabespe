import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoceSabiaParquinhoComponent } from './voce-sabia-parquinho.component';

describe('VoceSabiaParquinhoComponent', () => {
  let component: VoceSabiaParquinhoComponent;
  let fixture: ComponentFixture<VoceSabiaParquinhoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VoceSabiaParquinhoComponent]
    });
    fixture = TestBed.createComponent(VoceSabiaParquinhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
