import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit { 
   public user = {
     username: '',
     password: '', 
     remember: false 
    }; 

     constructor(private dialogRef: MatDialogRef<LoginComponent>) { }

  ngOnInit(): void {
    
  }

   public onSubmit() {this.dialogRef.close();  
  }
}

