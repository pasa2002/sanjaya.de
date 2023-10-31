import { Component , ElementRef , HostListener, ViewChild} from '@angular/core';

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
  private hasAnimated = false;

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.checkScroll();
  }
  @ViewChild('skillsSection') skillsSection: ElementRef;

  @HostListener('window:scroll', ['$event'])
  onScroll(event){
  this.checkScroll()
  }


  private checkScroll(){
    if(this.hasAnimated) return;

    const rect = this.skillsSection.nativeElement.getBoundingClientRect();
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);

    if(rect.top + rect.height < windowHeight-10){
      this.skillsSection.nativeElement.classList.add('animate');
      this.hasAnimated = true;
    }
  }

}
