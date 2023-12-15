import { AfterViewInit, Component, OnInit, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import gsap from 'gsap';
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HeaderBarComponent } from '../header-bar/header-bar.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit, AfterViewInit {
  @ViewChild('container', { read: ViewContainerRef }) container!: ViewContainerRef;
  constructor(private resolver: ComponentFactoryResolver) {}

  ngOnInit(): void {
    gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);
    gsap.set('.main', { position: 'fixed', background: '#fff', width: '100%', maxWidth: '1200px', height: '100%', top: 0, left: '50%', x: '-50%' });
    gsap.set('.scrollDist', { width: '100%', height: '200%' });

    ScrollTrigger.create({
      trigger: '.scrollDist',
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1
    });
  }

  addNewComponent() {
    const factory = this.resolver.resolveComponentFactory(Component);
    const componentRef = this.container.createComponent(factory);
  }

  ngAfterViewInit() {
    const animation = () => {
      gsap.timeline({
        scrollTrigger: {
          trigger: '.scrollDist',
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
        },
        onComplete: () => {
          return this.addNewComponent();
        }
      })
      .fromTo('.sky', { y: 0 }, { y: -200 }, 0)
      .fromTo('.cloud1', { y: 100 }, { y: -800 }, 0)
      .fromTo('.cloud2', { y: -150 }, { y: -500 }, 0)
      .fromTo('.cloud3', { y: -50 }, { y: -650 }, 0)
      .fromTo('.mountBg', { y: -10 }, { y: -100 }, 0)
      .fromTo('.mountMg', { y: -30 }, { y: -250 }, 0)
      .fromTo('.mountFg', { y: -50 }, { y: -300 }, 0);
    };
  
    animation();
  }
}

