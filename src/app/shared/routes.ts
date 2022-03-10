import { Routes } from '@angular/router';
import { TShirtsComponent } from '../t-shirts/t-shirts.component';
import { HoodyComponent } from '../hoody/hoody.component';
import { SweatshirtsComponent } from '../sweatshirts/sweatshirts.component';
import { PostersComponent } from '../posters/posters.component';
import { AccessoriesComponent } from '../accessories/accessories.component';
import { SetsComponent } from '../sets/sets.component';
import { HomeComponent } from '../home/home.component';
import { ClothDetailComponent } from '../cloth-detail/cloth-detail.component';
import { ContactComponent } from '../contact/contact.component';
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
{ path: 'home',
component: HomeComponent 
},
{ path: 'contact',
component: ContactComponent 
},
{ path: 'cloth-detail/:id',
 component: ClothDetailComponent
},
 
  { path: '',
   redirectTo: '/home', 
   pathMatch: 'full' },
];
