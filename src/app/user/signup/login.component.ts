import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  regForm:FormGroup;
  submitted = false;
  public newData:any;

  constructor(private formBuilder: FormBuilder){}

  ngOnInit(){
    this.regForm = this.formBuilder.group({
      firstName:['', Validators.required],
      lastName:['', Validators.required],
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(6)]],
      phone:['', [Validators.required, Validators.minLength(10)]]
    });
  }
  get formData(){ return this.regForm.controls;}

  onClick(decision:number){
    if(decision === 0){ }
  }

  onSubmit(){
    this.submitted = true;

    if(this.regForm.invalid){
      return;
    }
  alert(JSON.stringify(this.regForm.value));
    
  }
}

