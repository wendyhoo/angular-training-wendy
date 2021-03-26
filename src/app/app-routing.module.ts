import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { EvaluationFormComponent } from './evaluation-form/evaluation-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./homepage/homepage.module').then((m) => m.HomepageModule),
  },
  {
    path: 'evaluation-form',
    loadChildren: () =>
      import('./evaluation-form/evaluation-form.module').then(
        (m) => m.EvaluationFormModule
      ),
  },

  { path: 'about', component: AboutComponent },
  // { path: 'evaluation-form', component: EvaluationFormComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
