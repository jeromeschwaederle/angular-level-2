import { Component, OnInit } from '@angular/core';
import { NgForOf, NgIf } from "@angular/common";
import { SnackJobComponent } from "./snack-job/snack-job.component";
import { Job } from "../models/job";
import { JobDataService } from "../services/job-data.service";
import { Router } from "@angular/router";
import { FavoritesManagerService } from "../services/favorites-manager.service";

@Component({
  selector: 'app-list-jobs',
  standalone: true,
  imports: [
    SnackJobComponent,
    NgIf,
    NgForOf
  ],
  template: `
    <div class="container">
      <ng-container *ngIf="currentUrl === allJobsUrl">
        <ng-container *ngFor="let job of jobs">
          <app-snack-job [job]="job"/>
        </ng-container>
      </ng-container>

      <ng-container *ngIf="currentUrl === favoritesUrl">
        <ng-container *ngIf="theyAreNoFavorite()">
          <p style="text-align: center">No job marked as favorite yet.</p>
        </ng-container>
        <ng-container *ngFor="let job of jobs">
          <ng-container *ngIf="isMarkedAsFavorite(job)" >
            <app-snack-job [job]="job" [showStar]="false"/>
          </ng-container>
        </ng-container>
      </ng-container>
    </div>

  `,
  styles: `
    .container {
      display: flex;
      flex-direction: column;
      gap: 24px;
      padding: 50px;
      max-width: 1200px;
    }
  `
})
export class ListJobsComponent implements OnInit {

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

  protected theyAreNoFavorite(): boolean {
    return !this.jobs.some(this.isMarkedAsFavorite.bind(this));
  }

  protected isMarkedAsFavorite(job: Job): boolean {
    return this.favoriteJobIds.includes(job.id);
  }

}
