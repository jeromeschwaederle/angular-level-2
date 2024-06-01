import { Routes } from '@angular/router';
import { ListAllJobsComponent } from "./components/list-all-jobs.component";

export const routes: Routes = [
  {path: 'jobs', component: ListAllJobsComponent},
  {path: 'favorites', component: ListAllJobsComponent},
  {path: '**', redirectTo: '/jobs', pathMatch: 'full'},
];
