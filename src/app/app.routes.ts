import { Routes } from '@angular/router';
import { ListAllJobsComponent } from "./components/list-all-jobs/list-all-jobs.component";
import { ListFavoritesComponent } from "./components/list-favorites/list-favorites.component";

export const routes: Routes = [
  {path: 'jobs', component: ListAllJobsComponent},
  {path: 'favorites', component: ListFavoritesComponent},
  {path: '**', redirectTo: '/jobs', pathMatch: 'full'},
];
