import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHirerComponent } from './user-hirer.component';

describe('UserHirerComponent', () => {
  let component: UserHirerComponent;
  let fixture: ComponentFixture<UserHirerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserHirerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserHirerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
