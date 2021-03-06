import { Component,Inject, Input, OnInit } from '@angular/core';
import { Cloth } from '../shared/cloth';
import { ItemService } from '../services/item.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { ThisReceiver } from '@angular/compiler';
import { subscribeOn, switchMap } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Comment } from '../shared/comment';
import { HttpService } from '../services/http.service';
@Component({
  selector: 'app-cloth-detail',
  templateUrl: './cloth-detail.component.html',
  styleUrls: ['./cloth-detail.component.scss'],
})
export class ClothDetailComponent implements OnInit {
  public cloth!: Cloth;
  public clothesIds!: string[];
  public previousClothId!: string;
  public nextClothId!: string;
  public commentForm!: FormGroup;
  public comment!: Comment;
  public commentFormErrors: any = {
     'rating': '',
     'comment': '',
     'author': ''  
    };
  constructor(@Inject('BaseURL') public BaseURL: string,
    private clothService: ItemService,
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder,
    private httpService: HttpService
    ) {
      this.createCommentForm();
    }

  ngOnInit(): void {
    this.getClothDetails();
  }
  private createCommentForm() {
      this.commentForm = this.fb.group({
      rating: [0, Validators.min(1)],
      author: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      comment: ['', Validators.required],
     date: new Date()
    });
    this.commentForm.valueChanges
      .subscribe(data =>
        this.clothService.onFormValueChanged(
        this.commentForm,
        this.commentFormErrors, 
        this.commentValidationMessages, data));
  }
  public onSubmit(): void {
      this.comment = this.commentForm.value;
      this.cloth.comments.push(this.comment);
      this.httpService.update(this.cloth, this.clothService.clothesLink + "/" + this.cloth.id);
      this.resetCommentForm();
  }
  public addToOrder(): void {
      this.openOrderPopup();
      this.clothService.orderedClothes.push(this.cloth);
    }
      public openOrderPopup(): void {
      this.clothService.openMessagePopup("???? ???????????????? "+this.cloth.name+ " ?? ???????? ?????????????? ");
  }

  private resetCommentForm(): void { this.commentForm.reset({
      rating: 0,
      author: '',
      comment: '',
      date: new Date()
      });
    }
  private getClothDetails(): void {
    this.clothService
      .getClothesIds()
      .subscribe((clothesIds) => (this.clothesIds = clothesIds));
    this.route.params
      .pipe(
        switchMap((params: Params) => this.clothService.getCloth(params['id']))
      )
      .subscribe((cloth) => {
        this.cloth = cloth;
        this.setPreviousAndNextCloth(cloth.id);
      });
  }

  public goBack(): void {
    this.location.back();
  }
  private setPreviousAndNextCloth(clothId: string): void {
    const index: number = this.clothesIds?.indexOf(clothId);
    this.previousClothId =
      this.clothesIds[
        (this.clothesIds.length + index - 1) % this.clothesIds.length
      ];
    this.nextClothId =
      this.clothesIds[
        (this.clothesIds.length + index + 1) % this.clothesIds.length
      ];
      this.resetCommentForm();
  }
  private commentValidationMessages: any = {
    rating: {
      min: '?????????????? ???????????? ???????? ???? 1 ???? 5',
    },
    comment: {
      required: '???????????????? ??????????',
    },
    author: {
      required: '?????????????? ???????? ??????',
      minlength: '?????? ???????????? ?????????????????? ?????? ?????????????? 2 ??????????????',
      maxlength: '?????? ???? ?????????? ???????????????? ?????????? 25 ????????????????',
    },
  };
}
