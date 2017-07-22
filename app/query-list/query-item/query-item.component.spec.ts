import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryItemComponent } from './query-item.component';

describe('QueryItemComponent', () => {
  let component: QueryItemComponent;
  let fixture: ComponentFixture<QueryItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueryItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
