import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUsergroupComponent } from './update-usergroup.component';

describe('UpdateUsergroupComponent', () => {
  let component: UpdateUsergroupComponent;
  let fixture: ComponentFixture<UpdateUsergroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateUsergroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateUsergroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
