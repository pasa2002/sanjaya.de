import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { ImprintComponent } from './imprint/imprint.component';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', component: HomeComponent },
  // { path: 'about-me', component: AboutMeComponent },
  // { path: 'skills', component: SkillsComponent },
  // { path: 'projects', component: ProjectsComponent },
  // { path: 'contact-me', component: ContactMeComponent },
  { path: 'imprint', component: ImprintComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true}),
  CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
