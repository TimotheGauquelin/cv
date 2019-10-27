import { Component} from '@angular/core';

@Component({
  selector: 'app-inside-core-projet',
  templateUrl: './inside-core-projet.component.html',
  styleUrls: ['./inside-core-projet.component.scss']
})
export class InsideCoreProjetComponent {

  public showPupuceBlock = false;
  public showNutriplusBlock = false;
  public buttonName = 'Show';

  constructor() { }

  displayPupuceBlock() {
    this.showPupuceBlock = !this.showPupuceBlock;
    if (this.showPupuceBlock) {
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
