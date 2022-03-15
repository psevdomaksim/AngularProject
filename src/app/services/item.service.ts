import { Injectable } from '@angular/core';
import { Cloth } from '../shared/cloth';
import { CLOTHES } from '../shared/clothes';
import {delay, map, Observable, of} from "rxjs";
import {FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {baseURL} from "../shared/baseurl";

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  public clothesLink: string = "clothes";
  public feedbackLink: string = "feedback";

  constructor(private http: HttpClient) {}
  public getClothes(): Observable<Cloth[]> {
    return this.http.get<Cloth[]>(baseURL + this.clothesLink);
  }
  public getCloth(id: string): Observable<Cloth> {
      return this.http.get<Cloth>(baseURL + this.clothesLink + "/" + id);
    }

  public getClothesIds(): Observable<string[]> {
        return this.getClothes().pipe(map(clothes => clothes.map(cloth => cloth.id )));
      }

  public getFeaturedPizzas(): Observable<Cloth[]> {
      return this.http.get<Cloth[]>(baseURL + this.clothesLink + "?featured=true");
    }

  public getClothesWithDelay(): Observable<Cloth[]> {
    return this.http.get<Cloth[]>
    (baseURL + this.clothesLink)
    .pipe(delay(1000));
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
