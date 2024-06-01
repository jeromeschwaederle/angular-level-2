import { Injectable } from '@angular/core';
import { LocalStorageKeys } from "../utils/local-storage.enum";

@Injectable({
  providedIn: 'root'
})
export class FavoritesManagerService {

  addOrRemoveFavorite(id: number): void {
    const favoritesInLocalStorage = localStorage.getItem(LocalStorageKeys.Favorites);
    if (favoritesInLocalStorage === null) {
      localStorage.setItem(LocalStorageKeys.Favorites, JSON.stringify([id]));
    } else {
      let idArray: number[] = JSON.parse(favoritesInLocalStorage);
      if (idArray.includes(id)) {
        const elementIndex = idArray.indexOf(id);
        idArray.splice(elementIndex, 1);
      } else {
        idArray.push(id);
      }
      localStorage.setItem(LocalStorageKeys.Favorites, JSON.stringify(idArray));
    }
  }

  isFavorite(id: number): boolean {
    const favoritesInLocalStorage = localStorage.getItem(LocalStorageKeys.Favorites);
    if (favoritesInLocalStorage === null) {
      return false;
    } else {
      let idArray: number[] = JSON.parse(favoritesInLocalStorage);
      return idArray.includes(id);
    }
  }

}
