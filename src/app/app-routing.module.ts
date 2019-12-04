import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AfricaComponent } from './africa/africa.component';
import { AsiaComponent } from './asia/asia.component';
import { ReferencesComponent } from './references/references.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'africa', component: AfricaComponent },
  { path: 'asia', component: AsiaComponent },
  { path: 'references', component: ReferencesComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
