import { Component, OnInit } from '@angular/core';
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

  constructor(private ItemService: ItemService) {}

  ngOnInit(): void {
    this.clothes = this.ItemService.getClothes();
  }

  public onSelect(cloth: Cloth): void {
    this.selectedCloth= cloth;
  }
}
