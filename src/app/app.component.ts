import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JobDataService } from "./job-data.service";
import { Job } from "./models/job";
import { HttpClientModule } from "@angular/common/http";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'ng-job-search';
  jobs: Job[] = [];

  constructor(private httpService: JobDataService) { }

  ngOnInit() {
    this.httpService.getAllJobs().subscribe( response => {
      this.jobs = response
      console.log("hello !!!")
      console.log(this.jobs)
    })
  }

}
