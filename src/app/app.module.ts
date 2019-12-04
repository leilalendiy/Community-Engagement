import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AfricaComponent } from './africa/africa.component';
import { AsiaComponent } from './asia/asia.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ReferencesComponent } from './references/references.component';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';

@NgModule({
  declarations: [
    AppComponent,
    AfricaComponent,
    AsiaComponent,
    WelcomeComponent,
    ReferencesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2CarouselamosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
