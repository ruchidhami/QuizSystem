import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteQCComponent } from './delete-qc.component';

describe('DeleteQCComponent', () => {
  let component: DeleteQCComponent;
  let fixture: ComponentFixture<DeleteQCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteQCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteQCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
