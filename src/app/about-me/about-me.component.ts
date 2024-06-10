import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})

export class AboutMeComponent {  

  redirectToLinkedin() {
    window.open('https://www.linkedin.com/in/laura-elena-comanac-23b20b1a6/');
  }

  redirectToGithub() {
    window.open('https://github.com/Laura-ElenaComanac');
  }

  openEmail() {
    window.location.href = 'mailto:laura.elena.olaru@gmail.com';
  }

  redirectToYouTube() {
    window.open('https://www.youtube.com/@laura-elenacomanac1490');
  }

  redirectToPortofolio() {
    window.open('https://www.behance.net/laura-eolaru');
  }

  redirectToUX() {
    window.open('https://drive.google.com/file/d/1WXM7j0ZzAMcirYyzbVO8e5sNnu1OZqin/view?usp=sharing');
  }
}
