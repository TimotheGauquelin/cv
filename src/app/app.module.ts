import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CoreComponent } from './core/core.component';
import { InsideCoreImageComponent } from './core/inside-core-image/inside-core-image.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CoreComponent,
    InsideCoreImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
