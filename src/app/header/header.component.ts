import { Component , HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],

})
export class HeaderComponent {
  isActive = false;
  toggleMenu(): void {
    console.log('Menu toggled:', this.isActive);
    this.isActive = !this.isActive;
}

  @HostListener('window:resize', ['$event'])
  onResize(event){
    if(event.target.innerWidth>100*10){
      this.isActive = false;
    }
  }

  }

