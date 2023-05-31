import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TododetailComponent } from './tododetail.component';

describe('TododetailComponent', () => {
  let component: TododetailComponent;
  let fixture: ComponentFixture<TododetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TododetailComponent]
    });
    fixture = TestBed.createComponent(TododetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
