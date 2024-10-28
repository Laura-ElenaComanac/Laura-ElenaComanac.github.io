import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients-portfolio',
  templateUrl: './clients-portfolio.component.html',
  styleUrl: './clients-portfolio.component.css'
})
export class ClientsPortfolioComponent implements OnInit {
  ngOnInit(): void {
    
  }
  selectedFont: string = 'sans-serif';
  selectedTextColor: string = 'black';
  selectedSize: string = '20px';
  selectedWeight: string = '300';

  username = '';
  password = '';
}
