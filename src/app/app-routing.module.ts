import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { TripvibeComponent } from './ux/tripvibe/tripvibe.component';
import { WRComponent } from './ux/wr/wr.component';
import { ElysianComponent } from './ux/elysian/elysian.component';
import { ProjyComponent } from './ux/projy/projy.component';
import { MyheavenComponent } from './ux/myheaven/myheaven.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FitairComponent } from './ux/fitair/fitair.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: AboutMeComponent },
  { path: 'portofolio', component: PortfolioComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'tripvibe', component: TripvibeComponent },
  { path: 'wr', component: WRComponent },
  { path: 'elysian', component: ElysianComponent },
  { path: 'projy', component: ProjyComponent },
  { path: 'myheaven', component: MyheavenComponent },
  { path: 'fitair', component: FitairComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true})],
  exports: [RouterModule],
})
export class AppRoutingModule { }
