import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterStaggerComponent } from './filter-stager.component';

describe('FilterStagerComponent', () => {
  let component: FilterStaggerComponent;
  let fixture: ComponentFixture<FilterStaggerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterStaggerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterStaggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
