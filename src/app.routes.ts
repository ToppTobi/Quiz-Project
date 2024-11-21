import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {QuizzesComponent} from './components/quizzes/quizzes.component';
import {CreateSetComponent} from './components/create-set/create-set.component';
import {LearnSetsComponent} from './components/learn-sets/learn-sets.component';


export const routes: Routes = [
  { path: 'learnSets', component: LearnSetsComponent },
  { path: 'cards', component: QuizzesComponent }, // Standardroute
  {path: 'createSet', component: CreateSetComponent},
  { path: '**', redirectTo: 'createSet' } // Fallback
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
