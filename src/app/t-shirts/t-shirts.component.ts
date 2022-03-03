import { Component, OnInit } from '@angular/core';
import { Cloth } from '../shared/cloth';
import {ItemService} from "../services/item.service";

@Component({
  selector: 'app-t-shirts',
  templateUrl: './t-shirts.component.html',
  styleUrls: ['./t-shirts.component.scss']
})
export class TShirtsComponent implements OnInit {

  public clothes!: Cloth[];

  public selectedCloth!: Cloth;

  constructor(private ItemService: ItemService) { }

  ngOnInit(): void {
    this.ItemService.getClothesWithDelay()
    .subscribe(clothes=>this.clothes=clothes)
  }
  public onSelect(cloth: Cloth): void {
    this.selectedCloth= cloth;
  }
}


