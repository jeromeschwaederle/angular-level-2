import { Component, Input, OnInit } from '@angular/core';
import { JobDetail } from "../models/job-detail";
import { JobDataService } from "../services/job-data.service";
import { DatePipe, Location, NgIf, NgOptimizedImage } from "@angular/common";

@Component({
  selector: 'app-job-detail',
  standalone: true,
  imports: [
    NgIf,
    NgOptimizedImage,
    DatePipe
  ],
  template: `
    <button (click)="goBack()">Go back</button>
    <ng-container *ngIf="jobDetails">
      <div class="title-container">
        <img ngSrc="{{jobDetails.companyLogo}}" alt="logo of {{jobDetails.companyName}}" width="100" height="100"/>
        <p class="title"><strong>{{ jobDetails.companyName }}</strong>: {{ jobDetails.title }}</p>
      </div>
      <p><strong>Types: </strong><span [innerHTML]="jobDetails.types"></span></p>
      <p><strong>Industries: </strong> <span [innerHTML]="jobDetails.industries"></span></p>
      <p><strong>Publish date: </strong>{{ jobDetails.publishDate | date }}</p>
      <p><strong>Location: </strong>{{ jobDetails.location }}</p>
      <p><strong>Reference: </strong>{{ jobDetails.reference }}</p>
      <p><strong>Description:</strong></p>
      <div class="description-content" [innerHTML]="jobDetails.description"></div>
    </ng-container>
  `,
  styles: `
    .title-container {
      display: flex;
      gap: 30px;
      align-items: center;
      padding: 30px;
    }
    .title {
      font-size: 32px;
    }
    .description-content {
      padding: 0 40px;
    }
  `
})
export class JobDetailComponent implements OnInit {

  @Input() id!: number;
  jobDetails: JobDetail | undefined;

  constructor(
    private httpService: JobDataService,
    private location: Location
  ) { }

  ngOnInit() {
    this.httpService.getJobDetails(this.id).subscribe(response => this.jobDetails = response);
  }

  protected goBack(): void {
    this.location.back();
  }

}
