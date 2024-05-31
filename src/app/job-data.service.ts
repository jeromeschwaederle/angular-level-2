import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Job } from "./models/job";

@Injectable({
  providedIn: 'root'
})
export class JobDataService {

  private allJobsUrl = "/jobs";

  constructor(private http: HttpClient) { }

  getAllJobs(): Observable<Job[]> {
    return this.http.get(this.allJobsUrl) as Observable<Job[]>;
  }
}
