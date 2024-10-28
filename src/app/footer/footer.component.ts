import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})

export class FooterComponent implements OnInit{
  
  ngOnInit(): void {
}

  redirectToLinkedin() {
    window.open('https://www.linkedin.com/in/laura-elena-comanac-23b20b1a6/');
  }

  redirectToGithub() {
    window.open('https://github.com/Laura-ElenaComanac');
  }

  openEmail() {
    console.log("works!")
    window.location.href = 'mailto:laura.elena.comanac@gmail.com';
  }

  redirectToYouTube() {
    window.open('https://www.youtube.com/@laura-elenacomanac1490');
  }

  redirectToPortofolio() {
    window.open('https://www.behance.net/laura-eolaru');
  }
}
