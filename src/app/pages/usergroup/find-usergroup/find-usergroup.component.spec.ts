import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindUsergroupComponent } from './find-usergroup.component';

describe('FindUsergroupComponent', () => {
  let component: FindUsergroupComponent;
  let fixture: ComponentFixture<FindUsergroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindUsergroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindUsergroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
