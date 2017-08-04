import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddQuestionPageComponent } from './add-question-page.component';

describe('AddQuestionPageComponent', () => {
  let component: AddQuestionPageComponent;
  let fixture: ComponentFixture<AddQuestionPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddQuestionPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddQuestionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
