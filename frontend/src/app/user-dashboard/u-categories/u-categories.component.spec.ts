import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UCategoriesComponent } from './u-categories.component';

describe('UCategoriesComponent', () => {
  let component: UCategoriesComponent;
  let fixture: ComponentFixture<UCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
