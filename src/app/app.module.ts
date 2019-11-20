import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AfricaComponent } from './africa/africa.component';
import { AsiaComponent } from './asia/asia.component';

@NgModule({
  declarations: [
    AppComponent,
    AfricaComponent,
    AsiaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
