import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceIdMvfComponent } from './device-id-mvf.component';

describe('DeviceIdMvfComponent', () => {
  let component: DeviceIdMvfComponent;
  let fixture: ComponentFixture<DeviceIdMvfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceIdMvfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceIdMvfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
