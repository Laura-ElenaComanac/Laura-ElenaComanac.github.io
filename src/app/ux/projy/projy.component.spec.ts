import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjyComponent } from './projy.component';

describe('ProjyComponent', () => {
  let component: ProjyComponent;
  let fixture: ComponentFixture<ProjyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
