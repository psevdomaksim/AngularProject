import { Component, Input, OnInit } from '@angular/core';
import { Cloth } from '../shared/cloth';
import { ItemService } from '../services/item.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { ThisReceiver } from '@angular/compiler';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-cloth-detail',
  templateUrl: './cloth-detail.component.html',
  styleUrls: ['./cloth-detail.component.scss'],
})
export class ClothDetailComponent implements OnInit {
  public cloth!: Cloth;
  public clothesIds!: string[];
  public previousClothId!: string;
  public nextClothId!: string;

  constructor(
    private clothService: ItemService,
    private route: ActivatedRoute,
    private location: Location
  ) {}
  ngOnInit(): void {
    this.getClothDetails();
  }
  private getClothDetails(): void {
    this.clothService
      .getClothesIds()
      .subscribe((clothesIds) => (this.clothesIds = clothesIds));
    this.route.params
      .pipe(
        switchMap((params: Params) => this.clothService.getCloth(params['id']))
      )
      .subscribe((cloth) => {
        this.cloth = cloth;
        this.setPreviousAndNextPizza(cloth.id);
      });
  }

  public goBack(): void {
    this.location.back();
  }
  private setPreviousAndNextPizza(clothId: string): void {
    const index: number = this.clothesIds?.indexOf(clothId);
    this.previousClothId =
      this.clothesIds[
        (this.clothesIds.length + index - 1) % this.clothesIds.length
      ];
    this.nextClothId =
      this.clothesIds[
        (this.clothesIds.length + index + 1) % this.clothesIds.length
      ];
  }
}
