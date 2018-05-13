import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackerMvfComponent } from './tracker-mvf.component';

describe('TrackerMvfComponent', () => {
  let component: TrackerMvfComponent;
  let fixture: ComponentFixture<TrackerMvfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackerMvfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackerMvfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
