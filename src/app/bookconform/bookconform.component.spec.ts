import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookconformComponent } from './bookconform.component';

describe('BookconformComponent', () => {
  let component: BookconformComponent;
  let fixture: ComponentFixture<BookconformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookconformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookconformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
