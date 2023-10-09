import { Component,OnInit , ElementRef , HostListener } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  project_json = [
    {
      'title': 'Join',
      'skill': 'HTML | CSS | JS',
      'image':'../../assets/icons/join-bg.svg',
      'description':'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      'button-one':'Github',
      'button-two':'Live Test',
      'linkOne': 'https://github.com/pasa2002/Join',
      'linkTwo':'https://sanjaya-shrestha.developerakademie.net/Join/html/index.html'
    },
    {
      'title': 'Pollo Loco',
      'skill': 'HTML | CSS | JS',
      'image':'../../assets/icons/pollo-loco-bg.png',
      'description':'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      'button-one':'Github',
      'button-two':'Live Test',
      'linkOne': 'https://github.com/pasa2002/El-Pollo-Loco',
      'linkTwo':'https://sanjaya-shrestha.developerakademie.net/El-Pollo-Loco/index.html'
    }
  ]

  isAnimated = false;

  ngOnInit() {
    // Add a delay to start the animation after a short duration
    setTimeout(() => {
      this.isAnimated = true;
    }, 100);
  }

  constructor(private el: ElementRef) {}

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const projectDisplays = this.el.nativeElement.querySelectorAll('.project-display');

    projectDisplays.forEach(display => {
      const rect = display.getBoundingClientRect();

      if (rect.top <= (window.innerHeight || document.documentElement.clientHeight) && rect.bottom >= 0) {
        display.classList.add('animated');
      }
    });
  }

  redirectTo(link: string) {
    window.open(link, '_blank');
  }


}
