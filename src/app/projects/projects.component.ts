import { AfterViewInit, Component, OnInit, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent  implements OnInit{
  
  ngOnInit(): void {
    window.scroll(0, 0);
}
}
