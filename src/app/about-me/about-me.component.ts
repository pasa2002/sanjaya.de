import { Component , ElementRef , HostListener, ViewChild} from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {
  @ViewChild('aboutMeSection') aboutMeSection: ElementRef;
  private hasAnimated = false;

  ngAfterViewInit() {
    this.checkScroll();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    console.log("Scrolling...");
    this.checkScroll();
  }


  private checkScroll() {
    if (this.hasAnimated) return;

    const rect = this.aboutMeSection.nativeElement.getBoundingClientRect();
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);

    // Check if the top of the section has passed the bottom of the viewport
    if (rect.top + rect.height < windowHeight) {
      this.aboutMeSection.nativeElement.classList.add('animate');
      this.hasAnimated = true;
    }
  }




}
