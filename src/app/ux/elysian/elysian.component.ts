import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elysian',
  templateUrl: './elysian.component.html',
  styleUrl: './elysian.component.css'
})
export class ElysianComponent  implements OnInit{
  
  ngOnInit(): void {
    window.scroll(0, 0);
}
}
