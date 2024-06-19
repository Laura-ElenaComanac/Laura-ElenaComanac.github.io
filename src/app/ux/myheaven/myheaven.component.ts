import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myheaven',
  templateUrl: './myheaven.component.html',
  styleUrl: './myheaven.component.css'
})
export class MyheavenComponent  implements OnInit{
  
  ngOnInit(): void {
    window.scroll(0, 0);
}
}
