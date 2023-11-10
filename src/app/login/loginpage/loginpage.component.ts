import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationStart, Router } from '@angular/router';
import { AuthService } from 'src/app/Services/Auth.service';
import{Event } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent {
  //for blocking navigation

  navigationSet = false;

  //db 1
  constructor(private router: Router, private http:HttpClient, private authServie: AuthService){}
  reactiveForm : FormGroup;

  //db 2
  strategy:string="local";
  email:string="";
  password:string="";

  //3
  login(){
    let bodyData ={
      strategy:this.strategy,
      email:this.email,
      password:this.password

    };
    this.http.post("http://localhost:3030/authentication",bodyData).subscribe((res)=>
    {
    if(res){
      //this is for home authentication
      this.authServie.login();
      this.router.navigateByUrl("/home");
    }
    else{
      console.log("Your mail ID or PASSWORD is Incorrect");
    }
    });
  }

  formStatus;

  ngOnInit(){
    this.reactiveForm = new FormGroup({
      fname: new FormControl(null,[Validators.required,this.noSpaceAllowed]),
      email: new FormControl(null,[Validators.required,Validators.email]),
      pass : new FormControl(null,[Validators.required])
    });

    // this is for adding css to the invalid form
    this.reactiveForm.statusChanges.subscribe((value)=>{
      console.log(value);
      this.formStatus=value;
    })

    //this is for not to navigate back to home when hit on the forward button
    this.router.events.subscribe((routerEvent:Event)=>{
      if(routerEvent instanceof NavigationStart){
        this.navigationSet= true;
      }
    });
  }

  onSubmit(){
    console.log(this.reactiveForm);
  }

  noSpaceAllowed(control: FormControl){
    if(control.value != null && control.value.indexOf(' ')!=-1){
      return{nospaceAllowed:true}
    }
    return null;
  }
}
