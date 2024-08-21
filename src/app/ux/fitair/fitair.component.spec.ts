import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitairComponent } from './fitair.component';

describe('FitairComponent', () => {
  let component: FitairComponent;
  let fixture: ComponentFixture<FitairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FitairComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FitairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
