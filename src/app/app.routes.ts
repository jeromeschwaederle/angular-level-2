import { Routes } from '@angular/router';
import { ListJobsComponent } from "./components/list-jobs.component";

export const routes: Routes = [
  {path: 'jobs', component: ListJobsComponent},
  {path: 'favorites', component: ListJobsComponent},
  {path: '**', redirectTo: '/jobs', pathMatch: 'full'},
];
