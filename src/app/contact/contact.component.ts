import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ContactType, Feedback} from "../shared/feedback";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public feedbackForm!: FormGroup;
  public contactType = ContactType;
  private feedback!: Feedback;

  constructor(private fb: FormBuilder) { this.createForm();  }

  public onSubmit() {
      this.feedback = this.feedbackForm.value; 
      this.feedbackForm.reset({
        firstname: '',
        lastname: '',
        telNumber: 0,
        email: '',
        agree: false,
        contactType: '',
        message: ''
     });
    }
    ngOnInit(): void {
    }
  
    private createForm() {this.feedbackForm = this.fb.group({
         firstname: ['', Validators.required],
         lastname: ['', Validators.required],
         telNumber: [0, Validators.required],
         email: ['', Validators.required],
         agree: false,
         contactType: '',
         message: ''
      }
    );
    }
  }