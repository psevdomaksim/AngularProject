import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {FlexLayoutModule} from "@angular/flex-layout";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HomeComponent} from './home/home.component';
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
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { LoginComponent } from './login/login.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatSelectModule} from "@angular/material/select";
import { ContactComponent } from './contact/contact.component';
import {MatSliderModule} from "@angular/material/slider";
import {NgxStarRatingModule} from "ngx-star-rating";
@NgModule({
  declarations: [AppComponent, HomeComponent, ClothDetailComponent, FooterComponent, HeaderComponent, HoodyComponent, SweatshirtsComponent, PostersComponent, AccessoriesComponent, SetsComponent, TShirtsComponent, LoginComponent, ContactComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatSliderModule,
    NgxStarRatingModule
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule {
}


















