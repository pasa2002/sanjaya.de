import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

  skill=[
    {
      'name': 'Angular',
      'image': '../../assets/icons/angular.svg',
    },
    {
      'name': 'TypeScript',
      'image': '../../assets/icons/ts.svg',
    },
    {
      'name': 'JavaScript',
      'image': '../../assets/icons/js.svg',
    },
    {
      'name': 'HTML',
      'image': '../../assets/icons/html.svg',
    },
    {
      'name': 'Scrum',
      'image': '../../assets/icons/scrum.svg',
    },
    {
      'name': 'Firebase',
      'image': '../../assets/icons/firebase.svg',
    },
    {
      'name': 'Git',
      'image': '../../assets/icons/git.svg',
    },
    {
      'name': 'Css',
      'image': '../../assets/icons/css.svg',
    },
    {
      'name': 'Rest-Api',
      'image': '../../assets/icons/api.svg',
    },
    {
      'name': 'Material-design',
      'image': '../../assets/icons/material-design.svg',
    },
  ]

}
