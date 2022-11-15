import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricalTodosComponent } from './historical-todos.component';

describe('HistoricalTodosComponent', () => {
  let component: HistoricalTodosComponent;
  let fixture: ComponentFixture<HistoricalTodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricalTodosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoricalTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
