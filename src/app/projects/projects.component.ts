import { Component,OnInit } from '@angular/core';

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
      'image':'../../assets/icons/join-bg.png',
      'description':'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      'button-one':'Github',
      'button-two':'Live Test'
    },
    {
      'title': 'Pollo Loco',
      'skill': 'HTML | CSS | JS',
      'image':'../../assets/icons/pollo-loco-bg.png',
      'description':'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      'button-one':'Github',
      'button-two':'Live Test'
    },
    {
      'title': 'Pokédex',
      'skill': 'HTML | CSS | JS | API',
      'image':'../../assets/icons/pokedex.PNG',
      'description':'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
      'button-one':'Github',
      'button-two':'Live Test'
    }
  ]

  isAnimated = false;

  ngOnInit() {
    // Add a delay to start the animation after a short duration
    setTimeout(() => {
      this.isAnimated = true;
    }, 100);
  }
}
