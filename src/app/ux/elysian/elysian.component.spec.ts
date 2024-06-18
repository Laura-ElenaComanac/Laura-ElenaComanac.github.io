import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElysianComponent } from './elysian.component';

describe('ElysianComponent', () => {
  let component: ElysianComponent;
  let fixture: ComponentFixture<ElysianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElysianComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ElysianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
