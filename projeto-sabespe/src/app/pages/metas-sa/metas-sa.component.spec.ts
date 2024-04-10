import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetasSAComponent } from './metas-sa.component';

describe('MetasSAComponent', () => {
  let component: MetasSAComponent;
  let fixture: ComponentFixture<MetasSAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MetasSAComponent]
    });
    fixture = TestBed.createComponent(MetasSAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
