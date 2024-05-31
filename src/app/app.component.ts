import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JobDataService } from "../services/job-data.service";
import { Job } from "./models/job";
import { HttpClientModule } from "@angular/common/http";
import { NgForOf, NgIf } from "@angular/common";
import { SnackJobComponent } from "./components/snack-job/snack-job.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, NgIf, NgForOf, SnackJobComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  jobsAreLoaded = false;
  jobs: Job[] = [];

  constructor(private httpService: JobDataService) { }

  ngOnInit() {
    this.httpService.getAllJobs().subscribe( response => {
      if (response.length === 0) {
        this.jobsAreLoaded = false;
        console.log("pas de jobs ...")
        return;
      }
      this.jobsAreLoaded = true;
      this.jobs = response
      console.log("hello !!!")
      console.log(this.jobs)
    })
  }

}
