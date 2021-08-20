import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUsergroupComponent } from './view-usergroup.component';

describe('ViewUsergroupComponent', () => {
  let component: ViewUsergroupComponent;
  let fixture: ComponentFixture<ViewUsergroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewUsergroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewUsergroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
