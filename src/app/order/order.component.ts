import {Component, OnInit} from '@angular/core';
import {Cloth} from "../shared/cloth";
import { ItemService } from '../services/item.service';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {HttpService} from "../services/http.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  public displayedColumns: string[] = ['cloth', 'price', 'count', 'sum', 'delete'];
  public totalSum!: string;

  constructor(public clothService: ItemService,
              private dialog: MatDialog,
              private dialogRef: MatDialogRef<OrderComponent>,
              private router: Router,
              private http: HttpService) {
  }

  ngOnInit(): void {
    this.calculateTotalOrderSum();
  }

  public displayedClothList(): Cloth[] {
    return [...new Set(this.clothService.orderedClothes)]
      .sort((a, b) => (
        a.name.localeCompare(b.name))
      );
  }

  public calculateClothSum(chosenCloth: Cloth): string {
    return (this.countClothes(chosenCloth) * Number(chosenCloth.price))
      .toFixed(2);
  }

  public calculateTotalOrderSum(): void {
    this.totalSum = this.clothService.orderedClothes
      .map((cloth => (Number(cloth.price))))
      .reduce((a, b) => a + b, 0)
      .toFixed(2);
  }

  public countClothes(chosenCloth: Cloth): number {
    return this.clothService.orderedClothes.filter(cloth => cloth == chosenCloth).length;
  }
}
