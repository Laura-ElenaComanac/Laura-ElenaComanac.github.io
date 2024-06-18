import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { PortofolioComponent } from './portofolio/portofolio.component';
import { ContactComponent } from './contact/contact.component';
import { TripvibeComponent } from './ux/tripvibe/tripvibe.component';
import { WRComponent } from './ux/wr/wr.component';
import { ElysianComponent } from './ux/elysian/elysian.component';
import { ProjyComponent } from './ux/projy/projy.component';
import { MyheavenComponent } from './ux/myheaven/myheaven.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: AboutMeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'portofolio', component: PortofolioComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'tripvibe', component: TripvibeComponent },
  { path: 'wr', component: WRComponent },
  { path: 'elysian', component: ElysianComponent },
  { path: 'projy', component: ProjyComponent },
  { path: 'myheaven', component: MyheavenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true})],
  exports: [RouterModule],
})
export class AppRoutingModule { }
