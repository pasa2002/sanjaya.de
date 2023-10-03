import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AboutMeComponent } from './about-me/about-me.component';
// import { SkillsComponent } from './skills/skills.component';
// import { ProjectsComponent } from './projects/projects.component';
// import { ContactMeComponent } from './contact-me/contact-me.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';

const routes: Routes = [
  { path: '', component: HeroSectionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
