import { Routes } from '@angular/router';
import { ListJobsComponent } from "./components/list-jobs.component";
import { JobDetailComponent } from "./components/job-detail.component";

export const routes: Routes = [
  {path: 'jobs', component: ListJobsComponent},
  {path: 'jobs/:id', component: JobDetailComponent},
  {path: 'favorites', component: ListJobsComponent},
  {path: '**', redirectTo: '/jobs', pathMatch: 'full'},
];
