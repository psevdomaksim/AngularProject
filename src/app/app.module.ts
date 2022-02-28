import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {FlexLayoutModule} from "@angular/flex-layout";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MenuComponent} from './menu/menu.component';
import {MatListModule} from "@angular/material/list";
import {ClothDetailComponent} from './cloth-detail/cloth-detail.component';
import '@angular/common/locales/global/ru';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ItemService } from "./services/item.service";
import { HoodyComponent } from './hoody/hoody.component';
import { SweatshirtsComponent } from './sweatshirts/sweatshirts.component';
import { PostersComponent } from './posters/posters.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { SetsComponent } from './sets/sets.component';
import { TShirtsComponent } from './t-shirts/t-shirts.component';
@NgModule({
  declarations: [AppComponent, MenuComponent, ClothDetailComponent, FooterComponent, HeaderComponent, HoodyComponent, SweatshirtsComponent, PostersComponent, AccessoriesComponent, SetsComponent, TShirtsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule {
}


















