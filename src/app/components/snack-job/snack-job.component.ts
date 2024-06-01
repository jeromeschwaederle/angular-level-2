import { Component, Input } from '@angular/core';
import { Job } from "../../models/job";
import { NgOptimizedImage } from "@angular/common";
import { LocalStorageKeys } from "../../utils/local-storage.enum";

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

  /**
   * todo:
   *   étendre le type Job avec une propriété isFavorite: boolean
   */
  @Input() job!: Job;

  protected addToFavorites(id: number): void {
    // this.star.nativeElement.classList.add('active');
    document.getElementById('id')
    localStorage.setItem(LocalStorageKeys.Favorites, id.toString())

    /**
     * todo:
     *   faire un service qui gère de mettre à jour les id des jobs en localstorage
     *       - est-ce que c'est déjà dedans
     *           - si oui => l'enlever
     *           - si non => le mettre
     *           - faire une méthode qui renvoie un boolean et mettre dans le template class = boolean ? "icon-star active : icon-star
     *             document.getElementById pour refléter le style avec la classe "active"
     */
  }

}
