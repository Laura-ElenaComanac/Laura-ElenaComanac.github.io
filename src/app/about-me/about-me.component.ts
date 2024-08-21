import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})

export class AboutMeComponent implements OnInit{
  
  ngOnInit(): void {
}

  redirectToLinkedin() {
    window.open('https://www.linkedin.com/in/laura-elena-comanac-23b20b1a6/');
  }

  redirectToGithub() {
    window.open('https://github.com/Laura-ElenaComanac');
  }

  openEmail() {
    window.location.href = 'mailto:laura.elena.comanac@gmail.com';
  }

  redirectToYouTube() {
    window.open('https://www.youtube.com/@laura-elenacomanac1490');
  }

  redirectToPortofolio() {
    window.open('https://www.behance.net/laura-eolaru');
  }
}
