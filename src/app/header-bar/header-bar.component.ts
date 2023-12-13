import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css']
})
export class HeaderBarComponent {
  myTheme: string = "light";
  isMenuOpen = false;

  openMenu() {
    this.isMenuOpen = true;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    const screenWidth = event.target.innerWidth;
    console.log(screenWidth)

    if (screenWidth > 767 && this.isMenuOpen) {
      this.closeMenu();
    }
  }
  
  switchTheme(): void {
    if (this.myTheme === "light")
      this.myTheme = "dark";
    else
      this.myTheme = "light";
    document.body.setAttribute('data-bs-theme', this.myTheme);
  }
}
