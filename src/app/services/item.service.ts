import { Injectable } from '@angular/core';
import { Cloth } from '../shared/cloth';
import { CLOTHES } from '../shared/clothes';
import {delay, map, Observable, of} from "rxjs";
import {FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {baseURL} from "../shared/baseurl";
import {MatDialog} from "@angular/material/dialog";
import {PopupComponent} from "../popup/popup.component";

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  public clothesLink: string = "clothes";
  public feedbackLink: string = "feedback";
  public orderedClothes: Cloth[] = [];

  constructor(
    private http: HttpClient,
    private dialog: MatDialog) {}
  public getClothes(): Observable<Cloth[]> {
    return this.http.get<Cloth[]>(baseURL + this.clothesLink);
  }
  public getCloth(id: string): Observable<Cloth> {
      return this.http.get<Cloth>(baseURL + this.clothesLink + "/" + id);
    }

  public getClothesIds(): Observable<string[]> {
        return this.getClothes().pipe(map(clothes => clothes.map(cloth => cloth.id )));
      }

  public getFeaturedClothes(): Observable<Cloth[]> {
      return this.http.get<Cloth[]>(baseURL + this.clothesLink + "?featured=true");
    }

  public getClothesWithDelay(): Observable<Cloth[]> {
    return this.http.get<Cloth[]>
    (baseURL + this.clothesLink)
    .pipe(delay(1000));
  }
  public openMessagePopup(message: string): void {
    this.dialog.open(PopupComponent, {
      width: '500px',
      height: '110px',
      data: message
      }
     );
   }

  public onFormValueChanged(formGroup: FormGroup, formErrors: any, validationMessages: any, data?: any) {
    if (!formGroup) {
      return;
    }
    for (const field in formErrors) {
      if (formErrors.hasOwnProperty(field)) {
        formErrors[field] = '';
        const control = formGroup.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }
}
