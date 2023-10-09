import { Component , ElementRef , HostListener} from '@angular/core';

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

  constructor(private el: ElementRef) {}

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition = this.el.nativeElement.offsetTop;
    const scrollPosition = window.pageYOffset + (window.innerHeight / 2);

    const skillItems = this.el.nativeElement.querySelectorAll('.skill-subcontainer');

    if (scrollPosition >= componentPosition && scrollPosition <= componentPosition + this.el.nativeElement.offsetHeight) {
      skillItems.forEach(item => item.classList.add('animated'));
    }
  }

}
