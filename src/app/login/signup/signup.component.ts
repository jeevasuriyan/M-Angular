import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  //2
  constructor(private http:HttpClient, private router: Router){
    
  }

  reactiveForm : FormGroup;

  //db 1
  fname:string="";
  lname:string="";
  email:string="";
  password:string="";

  //3
  register(){
    let bodyData ={
      fname:this.fname,
      lname:this.lname,
      email:this.email,
      password:this.password
    };
    this.http.post("http://localhost:3030/users",bodyData).subscribe(()=>{
      alert("Regestration Successfull");
      this.router.navigateByUrl("/login");
    });
  }

  formStatus;
  ngOnInit(){
    this.reactiveForm = new FormGroup({
      fname: new FormControl(null,[Validators.required,this.noSpaceAllowed]),
      lname: new FormControl(null,[Validators.required,this.noSpaceAllowed]),
      email: new FormControl(null,[Validators.required,Validators.email]),
      pass: new FormControl(null,[Validators.required])
    });

    // this is for adding css to the invalid form
    this.reactiveForm.statusChanges.subscribe((value)=>{
      console.log(value);
      this.formStatus=value;
    })
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
