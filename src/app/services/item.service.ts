import { Injectable } from '@angular/core';
import { Cloth } from '../shared/cloth';
import { CLOTHES } from '../shared/clothes';
import { delay, Observable, of } from 'rxjs';
import {FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  constructor() {}
  public getClothes(): Observable<Cloth[]> {
    return of(CLOTHES);
  }
  public getCloth(id: string): Observable<Cloth> {
    return of(CLOTHES.filter((cloth) => cloth.id === id)[0]);
  }

  public getFeaturedClothes(): Observable<Cloth[]> {
    return of(CLOTHES.filter((cloth) => cloth.featured));
  }
  public getClothesWithDelay(): Observable<Cloth[]> {
    return of(CLOTHES)
    .pipe(
      delay(1000)
    );
  }
  public getClothesIds():Observable<string[]>{
    return of(CLOTHES.map(cloth=>cloth.id))
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
