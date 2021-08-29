import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  formGroup : FormGroup;

  constructor( private user:UserServiceService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.formGroup = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  };


  onButton(){
    if(this.formGroup.valid){
      this.user.postData(this.formGroup.value).subscribe(result=>{
        console.log(result);
          console.log(result);
          alert(result.token)
      })
    }
  }

}
