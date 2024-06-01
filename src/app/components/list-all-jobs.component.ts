import { Component, OnInit } from '@angular/core';
import { NgForOf, NgIf } from "@angular/common";
import { SnackJobComponent } from "./snack-job/snack-job.component";
import { Job } from "../models/job";
import { JobDataService } from "../services/job-data.service";
import { Router } from "@angular/router";
import { FavoritesManagerService } from "../services/favorites-manager.service";

@Component({
  selector: 'app-list-all-jobs',
  standalone: true,
  imports: [
    SnackJobComponent,
    NgIf,
    NgForOf
  ],
  template: `
    <ng-container *ngIf="currentUrl === allJobsUrl">
      <ng-container *ngFor="let job of jobs">
        <app-snack-job [job]="job"/>
      </ng-container>
    </ng-container>
    <ng-container *ngIf="currentUrl === favoritesUrl">
      <ng-container *ngFor="let job of jobs">
        <ng-container *ngIf="favoriteJobIds.includes(job.id)" >
            <app-snack-job [job]="job" [showStar]="false"/>
        </ng-container>
      </ng-container>
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

  currentUrl = '' ;
  allJobsUrl = '/jobs'
  favoritesUrl = '/favorites'
  jobs: Job[] = [];
  favoriteJobIds: number[] = [];

  constructor(
    private httpService: JobDataService,
    private router: Router,
    private favoritesManagerService: FavoritesManagerService
  ) { }

  ngOnInit() {
    this.httpService.getAllJobs().subscribe( response => {
      if (response.length === 0) return;
      this.jobs = response;
    });

    this.currentUrl = this.router.url;

    this.favoriteJobIds = this.favoritesManagerService.getAllFavorites();
  }

}
