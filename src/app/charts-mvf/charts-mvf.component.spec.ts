import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsMvfComponent } from './charts-mvf.component';

describe('ChartsMvfComponent', () => {
  let component: ChartsMvfComponent;
  let fixture: ComponentFixture<ChartsMvfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartsMvfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartsMvfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
