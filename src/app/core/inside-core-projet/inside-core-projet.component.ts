import { Component} from '@angular/core';
import { IImage } from 'ng-simple-slideshow';

@Component({
  selector: 'app-inside-core-projet',
  templateUrl: './inside-core-projet.component.html',
  styleUrls: ['./inside-core-projet.component.scss']
})
export class InsideCoreProjetComponent {

  imagePupuce: (string | IImage)[] = [
    { url: 'assets/PupuceImage/accueil.jpg', backgroundSize: 'contain', backgroundPosition: 'center' },
    { url: 'assets/PupuceImage/informations.jpg', backgroundSize: 'contain', backgroundPosition: 'center' },
    { url: 'assets/PupuceImage/informations2.jpg', backgroundSize: 'contain', backgroundPosition: 'center' },
    { url: 'assets/PupuceImage/informationsvalidées.jpg', backgroundSize: 'contain', backgroundPosition: 'center' },
    { url: 'assets/PupuceImage/justificatifs.jpg', backgroundSize: 'contain', backgroundPosition: 'center' },
    { url: 'assets/PupuceImage/emplacement.jpg', backgroundSize: 'contain', backgroundPosition: 'center' },
    { url: 'assets/PupuceImage/emplacement2.jpg', backgroundSize: 'contain', backgroundPosition: 'center' },
    { url: 'assets/PupuceImage/paiement.jpg', backgroundSize: 'contain', backgroundPosition: 'center' },
    { url: 'assets/PupuceImage/inscriptionTerminee.jpg', backgroundSize: 'contain', backgroundPosition: 'center' },
  ];
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
