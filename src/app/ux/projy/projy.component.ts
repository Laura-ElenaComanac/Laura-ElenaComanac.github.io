import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projy',
  templateUrl: './projy.component.html',
  styleUrl: './projy.component.css'
})
export class ProjyComponent implements OnInit{
  
  ngOnInit(): void {
    window.scroll(0, 0);
}
}
