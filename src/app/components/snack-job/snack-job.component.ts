import { Component, Input } from '@angular/core';
import { Job } from "../../models/job";
import { NgOptimizedImage } from "@angular/common";
import { FavoritesManagerService } from "../../services/favorites-manager.service";

@Component({
  selector: 'app-snack-job',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './snack-job.component.html',
  styleUrl: './snack-job.component.css'
})
export class SnackJobComponent {

  @Input() job!: Job;

  constructor(protected favoritesManagerService: FavoritesManagerService) { }

  protected toggleFavorites(id: number): void {
    this.favoritesManagerService.addOrRemoveFavorite(id);
  }

  protected isInFavorite(id: number): boolean {
    return this.favoritesManagerService.isFavorite(id);
  }

}
