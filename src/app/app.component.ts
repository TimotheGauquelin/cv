import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cvweb';
  public showPupuce = false;
  public showNutriplusBlock = false;
  public buttonName = 'Show';
  constructor() { }

  displayPupuceBlock() {
    this.showPupuce = !this.showPupuce;
    if (this.showPupuce) {
      this.buttonName = 'Hide';
    } else {
      this.buttonName = 'Show';
    }
  }

  displayNutriplusBlock() {
    this.showNutriplusBlock = !this.showNutriplusBlock;
    if (this.showNutriplusBlock) {
      this.buttonName = 'Hide';
    } else {
      this.buttonName = 'Show';
    }
  }
}
