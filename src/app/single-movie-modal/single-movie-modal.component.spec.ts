import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleMovieModalComponent } from './single-movie-modal.component';

describe('SingleMovieModalComponent', () => {
  let component: SingleMovieModalComponent;
  let fixture: ComponentFixture<SingleMovieModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleMovieModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleMovieModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
