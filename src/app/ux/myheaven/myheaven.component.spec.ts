import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyheavenComponent } from './myheaven.component';

describe('MyheavenComponent', () => {
  let component: MyheavenComponent;
  let fixture: ComponentFixture<MyheavenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyheavenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyheavenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
