import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripvibeComponent } from './tripvibe.component';

describe('TripvibeComponent', () => {
  let component: TripvibeComponent;
  let fixture: ComponentFixture<TripvibeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TripvibeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TripvibeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
