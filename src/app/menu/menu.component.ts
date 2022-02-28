import { Component, OnInit } from '@angular/core';
import { Cloth } from '../shared/cloth';
import {ItemService} from "../services/item.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  public clothes!: Cloth[];

  public selectedCloth!: Cloth;

  constructor(private ItemService: ItemService) {}

  ngOnInit(): void {
    this.clothes = this.ItemService.getClothes();
  }

  public onSelect(cloth: Cloth): void {
    this.selectedCloth= cloth;
  }
}
