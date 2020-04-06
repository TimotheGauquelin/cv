import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cvweb';
  public showPupuce = false;
  public showNutriplus = false;
  public showPokedex = false;
  public buttonName = 'Show';
  constructor() { }

  displayPupuce() {
    this.showPupuce = !this.showPupuce;
    if (this.showPupuce) {
      this.buttonName = 'Hide';
    } else {
      this.buttonName = 'Show';
    }
  }

  displayNutriplus() {
    this.showNutriplus = !this.showNutriplus;
    if (this.showNutriplus) {
      this.buttonName = 'Hide';
    } else {
      this.buttonName = 'Show';
    }
  }

  displayPokedex() {
    this.showPokedex = !this.showPokedex;
    if (this.showPokedex) {
      this.buttonName = 'Hide';
    } else {
      this.buttonName = 'Show';
    }
  }
}
