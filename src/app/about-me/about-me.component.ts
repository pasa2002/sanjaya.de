import { Component , ElementRef , HostListener} from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {
  constructor(private el: ElementRef) {}

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition = this.el.nativeElement.offsetTop;
    const scrollPosition = window.pageYOffset + (window.innerHeight / 2);

    if (scrollPosition >= componentPosition && scrollPosition <= componentPosition + this.el.nativeElement.offsetHeight) {
      this.el.nativeElement.querySelector('.about-me-content').classList.add('animated');
      this.el.nativeElement.querySelector('.contact-btn').classList.add('animated');
    } else {
      this.el.nativeElement.querySelector('.about-me-content').classList.remove('animated');
      this.el.nativeElement.querySelector('.contact-btn').classList.remove('animated');
    }
  }


}
