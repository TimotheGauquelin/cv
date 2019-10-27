import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CoreComponent } from './core/core.component';
import { InsideCoreImageComponent } from './core/inside-core-image/inside-core-image.component';
import { InsideCoreParcoursComponent } from './core/inside-core-parcours/inside-core-parcours.component';
import { InsideCoreProjetComponent } from './core/inside-core-projet/inside-core-projet.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CoreComponent,
    InsideCoreImageComponent,
    InsideCoreParcoursComponent,
    InsideCoreProjetComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
