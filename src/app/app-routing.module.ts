import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AfricaComponent } from './africa/africa.component';
import { AsiaComponent } from './asia/asia.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'africa', component: AfricaComponent },
  { path: 'asia', component: AsiaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
