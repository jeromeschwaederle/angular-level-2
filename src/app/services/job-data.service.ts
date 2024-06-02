import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Job } from "../models/job";
import { JobDetail } from "../models/job-detail";

@Injectable({
  providedIn: 'root'
})
export class JobDataService {

  private readonly allJobsUrl = "/jobs";
  private readonly jobDetailsUrl = "/jobs/";

  constructor(private http: HttpClient) { }

  getAllJobs(): Observable<Job[]> {
    return this.http.get(this.allJobsUrl) as Observable<Job[]>;
  }

  getJobDetails(id: number): Observable<JobDetail> {
    return this.http.get(this.jobDetailsUrl + id.toString()) as Observable<JobDetail>;
  }

}
