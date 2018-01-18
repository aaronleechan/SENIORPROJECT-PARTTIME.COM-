import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchServiceReciverComponent } from './search-service-reciver.component';

describe('SearchServiceReciverComponent', () => {
  let component: SearchServiceReciverComponent;
  let fixture: ComponentFixture<SearchServiceReciverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchServiceReciverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchServiceReciverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
