import { Component, Inject, OnInit } from '@angular/core';
import { Cloth } from '../shared/cloth';
import {ItemService} from "../services/item.service";

@Component({
  selector: 'app-menu',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  public clothes!: Cloth[];

  public selectedCloth!: Cloth;

  constructor(@Inject('BaseURL') public BaseURL: string,
    private ItemService: ItemService) {}

  ngOnInit(): void {
    this.ItemService.getClothesWithDelay()
   .subscribe(clothes=>this.clothes=clothes)
  }

  public onSelect(cloth: Cloth): void {
    this.selectedCloth= cloth;
  }
}
