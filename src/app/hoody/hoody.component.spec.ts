import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoodyComponent } from './hoody.component';

describe('HoodyComponent', () => {
  let component: HoodyComponent;
  let fixture: ComponentFixture<HoodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HoodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
