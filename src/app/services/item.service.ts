import { Injectable } from '@angular/core';
import {Cloth} from "../shared/cloth";
import {CLOTHES} from "../shared/clothes";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }
  public getClothes(): Cloth[] { return CLOTHES; }
}

