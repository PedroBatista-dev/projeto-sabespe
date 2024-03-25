import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoceSabiaCatedralComponent } from './voce-sabia-catedral.component';

describe('VoceSabiaCatedralComponent', () => {
  let component: VoceSabiaCatedralComponent;
  let fixture: ComponentFixture<VoceSabiaCatedralComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VoceSabiaCatedralComponent]
    });
    fixture = TestBed.createComponent(VoceSabiaCatedralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
