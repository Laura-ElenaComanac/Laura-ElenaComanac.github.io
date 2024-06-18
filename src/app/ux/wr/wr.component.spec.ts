import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WRComponent } from './wr.component';

describe('WRComponent', () => {
  let component: WRComponent;
  let fixture: ComponentFixture<WRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WRComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
