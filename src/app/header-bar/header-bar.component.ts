import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css']
})
export class HeaderBarComponent implements OnInit {

  redirectToYouTube(): void {
    window.open('https://www.youtube.com/@laura-elenacomanac1490');
  }

  myTheme: string = "dark";
  isMenuOpen = false;

  ngOnInit(): void {
    document.body.setAttribute('data-bs-theme', this.myTheme);
  }

  openMenu() {
    this.isMenuOpen = true;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    const screenWidth = event.target.innerWidth;

    if (screenWidth > 767 && this.isMenuOpen) {
      this.closeMenu();
    }
  }
  
  switchTheme(): void {
    if (this.myTheme === "dark")
      this.myTheme = "light";
    else
      this.myTheme = "dark";
    document.body.setAttribute('data-bs-theme', this.myTheme);
  }
}
