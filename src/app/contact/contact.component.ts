import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.css',
})
export class ContactComponent implements OnInit{
  
    ngOnInit(): void {
      window.scroll(0, 0);
  }
    selectedFont: string = 'sans-serif';
    selectedTextColor: string = 'black';
    selectedSize: string = '20px';
    selectedWeight: string = '300';
}
