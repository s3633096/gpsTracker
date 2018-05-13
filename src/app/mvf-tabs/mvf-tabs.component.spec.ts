import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MvfTabsComponent } from './mvf-tabs.component';

describe('MvfTabsComponent', () => {
  let component: MvfTabsComponent;
  let fixture: ComponentFixture<MvfTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MvfTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MvfTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
