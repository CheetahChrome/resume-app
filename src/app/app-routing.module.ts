import { NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Pages/about/about.component';
import { ResumeComponent } from './Pages/resume/resume.component';

const routes: Routes = [

  { path: 'about', component: AboutComponent },
  { path: 'resume', component: ResumeComponent },
  { path: '**', redirectTo: 'resume' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
