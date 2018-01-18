import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserreciverComponent } from './userreciver.component';

describe('UserreciverComponent', () => {
  let component: UserreciverComponent;
  let fixture: ComponentFixture<UserreciverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserreciverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserreciverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
