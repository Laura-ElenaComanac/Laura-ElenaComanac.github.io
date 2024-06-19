import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wr',
  templateUrl: './wr.component.html',
  styleUrl: './wr.component.css'
})
export class WRComponent  implements OnInit{
  
  ngOnInit(): void {
    window.scroll(0, 0);
}
}
