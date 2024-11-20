import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {User} from "./shared/models/User";
import {QuizzesComponent} from './components/quizzes/quizzes.component';


export const routes: Routes = [
  { path: 'cards', component: QuizzesComponent }, // Standardroute
  { path: '**', redirectTo: 'cards' } // Fallback
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
