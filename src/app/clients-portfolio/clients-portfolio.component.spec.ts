import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsPortfolioComponent } from './clients-portfolio.component';

describe('ClientsPortfolioComponent', () => {
  let component: ClientsPortfolioComponent;
  let fixture: ComponentFixture<ClientsPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientsPortfolioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClientsPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
