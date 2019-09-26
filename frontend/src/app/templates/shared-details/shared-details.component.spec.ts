import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedDetailsComponent } from './shared-details.component';

describe('SharedDetailsComponent', () => {
  let component: SharedDetailsComponent;
  let fixture: ComponentFixture<SharedDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
