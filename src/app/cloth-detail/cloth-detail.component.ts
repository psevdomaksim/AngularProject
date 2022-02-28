import { Component, Input, OnInit } from '@angular/core';
import { Cloth } from '../shared/cloth';
import { ItemService } from '../services/item.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cloth-detail',
  templateUrl: './cloth-detail.component.html',
  styleUrls: ['./cloth-detail.component.scss'],
})
export class ClothDetailComponent implements OnInit {
  public cloth!: Cloth;
  constructor(
    private clothService: ItemService,
    private route: ActivatedRoute,
    private location: Location
  ) {}
  ngOnInit(): void {
    this.getClothDetails();
  }
  public getClothDetails(): void {
    let id = this.route.snapshot.params['id'];
    this.cloth = this.clothService.getCloth(id);
  }
  public goBack(): void {
    this.location.back();
  }
}
