import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fitair',
  templateUrl: './fitair.component.html',
  styleUrl: './fitair.component.css'
})
export class FitairComponent implements OnInit{
  
  ngOnInit(): void {
    window.scroll(0, 0);
}
}