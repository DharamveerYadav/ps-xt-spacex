import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProgramsComponent } from './containers/programs/programs.component';

const routes: Routes = [
  {
    path: 'programs', component: ProgramsComponent
  },
  {
    path: '', redirectTo: 'programs', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
