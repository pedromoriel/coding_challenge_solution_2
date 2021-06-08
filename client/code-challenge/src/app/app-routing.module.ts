import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './content/components/main/main.component';

const routes: Routes = [
  {path: '', redirectTo: 'numbers', pathMatch: 'full'},
  {path: "numbers", component: MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
