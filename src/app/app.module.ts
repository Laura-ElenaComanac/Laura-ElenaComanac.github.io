import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectsComponent } from './projects/projects.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { TripvibeComponent } from './ux/tripvibe/tripvibe.component';
import { WRComponent } from './ux/wr/wr.component';
import { ElysianComponent } from './ux/elysian/elysian.component';
import { MyheavenComponent } from './ux/myheaven/myheaven.component';
import { ProjyComponent } from './ux/projy/projy.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    ProjectsComponent,
    HeaderBarComponent,
    AboutComponent,
    ContactComponent,
    TripvibeComponent,
    WRComponent,
    ElysianComponent,
    MyheavenComponent,
    ProjyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LazyLoadImageModule
  ],
  exports: [
    HeaderBarComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
