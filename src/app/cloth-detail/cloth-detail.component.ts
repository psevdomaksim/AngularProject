import {Component, Input, OnInit} from '@angular/core';
import {Cloth} from "../shared/cloth";

@Component({
  selector: 'app-cloth-detail',
  templateUrl: './cloth-detail.component.html',
  styleUrls: ['./cloth-detail.component.scss'],
})
export class ClothDetailComponent implements OnInit {
  @Input() public cloth!: Cloth;

  constructor() {}

  ngOnInit(): void {}
}
