import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFoormComponent } from './search-foorm.component';

describe('SearchFoormComponent', () => {
  let component: SearchFoormComponent;
  let fixture: ComponentFixture<SearchFoormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchFoormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFoormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
