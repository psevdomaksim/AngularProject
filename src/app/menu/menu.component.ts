import { Component, OnInit } from '@angular/core';
import { Cloth } from '../shared/cloth';
import { CLOTHES } from '../shared/clothes';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  public clothes: Cloth[] = CLOTHES;
  public selectedCloth!: Cloth;

  constructor() {}

  ngOnInit(): void {}

  public onSelect(cloth: Cloth): void {
    this.selectedCloth= cloth;
  }
}
