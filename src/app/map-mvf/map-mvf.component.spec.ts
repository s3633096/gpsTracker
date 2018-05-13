import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapMvfComponent } from './map-mvf.component';

describe('MapMvfComponent', () => {
  let component: MapMvfComponent;
  let fixture: ComponentFixture<MapMvfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapMvfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapMvfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
