import { SkillsComponent } from './skills/skills.component';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';

const routes: Routes = [
  {path:'about' ,component:AboutComponent},
  {path:'' ,component:AboutComponent},

  {path:'experience' ,component:ExperienceComponent},
  {path:'skills' ,component:SkillsComponent},
  {path:'education' ,component:EducationComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
