import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BoldWordsPipe } from './Pipes/bold-words.pipe';
import { FilterTechPipe } from './Pipes/filter-tech.pipe';
import { FooterComponent } from './Components/footer/footer.component';
import { JobCarouselComponent } from './Components/job-carousel/job-carousel.component';
import { TechFocusComponent } from './Components/tech-focus/tech-focus.component';
import { AboutComponent } from './Pages/about/about.component';
import { ResumeComponent } from './Pages/resume/resume.component';


@NgModule({
  declarations: [
    AppComponent,
    BoldWordsPipe,
    FilterTechPipe,
    FooterComponent,
    JobCarouselComponent,
    TechFocusComponent,
    AboutComponent,
    ResumeComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatDividerModule,
    MatSidenavModule,
    MatIconModule,
    MatSlideToggleModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
