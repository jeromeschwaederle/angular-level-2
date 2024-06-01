import { Component, OnInit } from '@angular/core';
import { NgForOf } from "@angular/common";
import { SnackJobComponent } from "./snack-job/snack-job.component";
import { Job } from "../models/job";
import { JobDataService } from "../../services/job-data.service";

@Component({
  selector: 'app-list-all-jobs',
  standalone: true,
  imports: [
    NgForOf,
    SnackJobComponent
  ],
  template: `
    <ng-container *ngFor="let job of jobs">
      <app-snack-job [job]="job"/>
    </ng-container>
  `,
  styles: `
    :host {
      display: flex;
      flex-direction: column;
      gap: 30px;
      padding: 50px;
    }
  `
})
export class ListAllJobsComponent implements OnInit {

  jobs: Job[] = [];

  constructor(private httpService: JobDataService) { }

  ngOnInit() {
    this.httpService.getAllJobs().subscribe( response => {
      if (response.length === 0) {
        console.log("pas de jobs ...")
        return;
      }
      this.jobs = response
      console.log("PLEIN DE JOBS !!!")
      console.log(this.jobs)
    })
  }


}
