import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpdeskSidebarComponent } from './helpdesk-sidebar.component';

describe('HelpdeskSidebarComponent', () => {
  let component: HelpdeskSidebarComponent;
  let fixture: ComponentFixture<HelpdeskSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelpdeskSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpdeskSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
