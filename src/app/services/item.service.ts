import { Injectable } from '@angular/core';
import { Cloth } from '../shared/cloth';
import { CLOTHES } from '../shared/clothes';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  constructor() {}
  public getClothes(): Cloth[] {
    return CLOTHES;
  }
  public getCloth(id: string): Cloth {
    return CLOTHES.filter((cloth) => cloth.id === id)[0];
  }

  public getFeaturedClothes(): Cloth[] {
    return CLOTHES.filter((cloth) => cloth.featured);
  }
}
