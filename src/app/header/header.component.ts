import { ViewportScroller } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(public router: Router,private viewportScroller: ViewportScroller) { }
  isActive = false;


  getLogo(): string {
    return this.router.url === '/imprint' ? '../../assets/icons/logo-blue.png' : '../../assets/icons/logo.png';
  }

  scrollToElement(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }

  toggleMenu(): void {
    this.isActive = !this.isActive;
    if (this.isActive) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }

  closeMenu(){
    this.isActive = false;
    document.body.classList.remove('no-scroll');
  }

  @HostListener('window:resize', ['$event'])
  onResize(event){
    if(event.target.innerWidth > 1000){
      this.isActive = false;
    }
  }
}
