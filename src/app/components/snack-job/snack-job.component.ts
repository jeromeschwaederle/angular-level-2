import { Component, Input } from '@angular/core';
import { Job } from "../../models/job";
import { NgIf, NgOptimizedImage } from "@angular/common";
import { FavoritesManagerService } from "../../services/favorites-manager.service";

@Component({
  selector: 'app-snack-job',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgIf
  ],
  templateUrl: './snack-job.component.html',
  styleUrl: './snack-job.component.css'
})
export class SnackJobComponent {

  @Input() job!: Job;
  @Input() showStar: boolean = true;

  constructor(protected favoritesManagerService: FavoritesManagerService) { }

  protected toggleFavorites(id: number): void {
    this.favoritesManagerService.addOrRemoveFavorite(id);
  }

  protected isInFavorite(id: number): boolean {
    return this.favoritesManagerService.isFavorite(id);
  }

}
