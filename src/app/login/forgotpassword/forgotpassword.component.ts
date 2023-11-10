import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent {

  reactiveForm: FormGroup;
  formStatus;

  //db2
  strategy:string="local";
  email:string ="";
  password:string="";
  // c_password:string="";

  //db1
  constructor(private router:Router ,private http: HttpClient){
  }

  //db3

  update(){
    let bodyData={
      strategy:this.strategy,
      email:this.email,
      password:this.password,
      // c_password:this.c_password
      
    };
    this.http.patch("http://localhost:3030/users",bodyData).subscribe((resData:any)=>{
      console.log(resData);
      if(resData.status){
        
          alert("Password Updated successfully");
          this.router.navigateByUrl("/login");
        
        
      }
      else{
        alert("Invalid Email or password missmatch");
        console.log("error in chaging password");
      }
    });
    
  }

  
  ngOnInit(){
    this.reactiveForm = new FormGroup({
      pass: new FormControl(null,[Validators.required]),
      cpass: new FormControl(null,[Validators.required])
    });

    this.reactiveForm.statusChanges.subscribe((value)=>{
      console.log(value);
      this.formStatus=value;
    })
  }

  onSubmit(){
    console.log(this.reactiveForm);
  }


}
