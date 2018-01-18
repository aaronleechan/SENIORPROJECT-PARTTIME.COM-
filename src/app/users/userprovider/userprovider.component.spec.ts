import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserproviderComponent } from './userprovider.component';

describe('UserproviderComponent', () => {
  let component: UserproviderComponent;
  let fixture: ComponentFixture<UserproviderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserproviderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserproviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
