import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpdeskWelcomeComponent } from './helpdesk-welcome.component';

describe('HelpdeskWelcomeComponent', () => {
  let component: HelpdeskWelcomeComponent;
  let fixture: ComponentFixture<HelpdeskWelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelpdeskWelcomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpdeskWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
