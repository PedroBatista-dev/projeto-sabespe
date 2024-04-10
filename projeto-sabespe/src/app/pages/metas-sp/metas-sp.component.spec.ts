import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetasSPComponent } from './metas-sp.component';

describe('MetasSPComponent', () => {
  let component: MetasSPComponent;
  let fixture: ComponentFixture<MetasSPComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MetasSPComponent]
    });
    fixture = TestBed.createComponent(MetasSPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
