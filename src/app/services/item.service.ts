import { Injectable } from '@angular/core';
import { Cloth } from '../shared/cloth';
import { CLOTHES } from '../shared/clothes';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  constructor() {}
  public getClothes(): Observable<Cloth[]> {
    return of(CLOTHES);
  }
  public getCloth(id: string): Observable<Cloth> {
    return of(CLOTHES.filter((cloth) => cloth.id === id)[0]);
  }

  public getFeaturedClothes(): Observable<Cloth[]> {
    return of(CLOTHES.filter((cloth) => cloth.featured));
  }
  public getClothesWithDelay(): Observable<Cloth[]> {
    return of(CLOTHES)
    .pipe(
      delay(2000)
    );
  }
  public getClothesIds():Observable<string[]>{
    return of(CLOTHES.map(cloth=>cloth.id))
  }
}
