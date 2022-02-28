import { Routes } from '@angular/router';
import { TShirtsComponent } from '../t-shirts/t-shirts.component';
import { HoodyComponent } from '../hoody/hoody.component';
import { SweatshirtsComponent } from '../sweatshirts/sweatshirts.component';
import { PostersComponent } from '../posters/posters.component';
import { AccessoriesComponent } from '../accessories/accessories.component';
import { SetsComponent } from '../sets/sets.component';

export const routes: Routes = [
  { path: 't-shirts',
   component: TShirtsComponent 
},
  { path: 'hoody', 
  component: HoodyComponent
 },
  { path: 'sweatshirts',
   component: SweatshirtsComponent 
},
  { path: 'posters',
   component: PostersComponent 
},
{ path: 'accessories',
component: AccessoriesComponent 
},
{ path: 'sets',
component: SetsComponent 
},
  { path: '',
   redirectTo: '/menu', 
   pathMatch: 'full' },
];
