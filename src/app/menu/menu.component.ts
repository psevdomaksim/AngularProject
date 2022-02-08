import {Component, OnInit} from '@angular/core';
import {Cloth} from "../shared/cloth";

@Component({selector: 'app-menu', templateUrl: './menu.component.html', styleUrls: ['./menu.component.scss']})
export class MenuComponent implements OnInit {
  public clothes: Cloth[] = [{
    id: '0',
    name: 'cloth1',
    image: '/assets/images/maik.jpg',
    featured: true,
    label: '',
    price: '17.50',
    description: 'desc1'
  }, {
    id: '1',
    name: 'cloth2',
    image: '/assets/images/maik.jpg',
    featured: true,
    label: '',
    price: '20.10',
    description: 'desc2'
  },
    {
      id: '2',
      name: 'cloth3',
      image: '/assets/images/maik.jpg',
      featured: true,
      label: '',
      price: '20.10',
      description: 'desc3'
    }, {
      id: '3',
      name: 'cloth4',
      image: '/assets/images/maik.jpg',
      featured: true,
      label: '',
      price: '18.60',
      description: 'desc4'
    },];

  constructor() {
  }

  ngOnInit(): void {
  }
}

