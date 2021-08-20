import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUserHelpdeskComponent } from './view-user-helpdesk.component';

describe('ViewUserHelpdeskComponent', () => {
  let component: ViewUserHelpdeskComponent;
  let fixture: ComponentFixture<ViewUserHelpdeskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewUserHelpdeskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewUserHelpdeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
