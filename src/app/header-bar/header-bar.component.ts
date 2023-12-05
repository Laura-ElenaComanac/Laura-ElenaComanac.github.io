import { Component } from '@angular/core';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css']
})
export class HeaderBarComponent {
  myTheme: string = "light";
  
  switchTheme(): void {
    if (this.myTheme === "light")
      this.myTheme = "dark";
    else
      this.myTheme = "light";
    document.body.setAttribute('data-bs-theme', this.myTheme);
  }
}
