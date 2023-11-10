import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  constructor(private http:HttpClient, private router: Router){}
  reactiveForm : FormGroup;

  

  fname:string="";
  lname:string="";  
  mobile:string="";
  text1:string="";

  

  query(){
    let bodyData ={
      fname:this.fname,
      lname:this.lname,
      mobile:this.mobile,
      text1:this.text1
    };
    console.log(bodyData);
    this.http.post("http://localhost:3030/query",bodyData).subscribe((res)=>{
      
      if(res){
        console.log("Submited successfulyy!!!");
        this.router.navigateByUrl("/home");
      }
      else{
        console.log("Enter Valid Informations");
      }

    });

  }
  formStatus;
  ngOnInit(){
    this.reactiveForm = new FormGroup({
      fname: new FormControl(null,[Validators.required]),
      lname: new FormControl(null,[Validators.required]),
      mobile : new FormControl(null,[Validators.required]),
      text1 : new FormControl(null,[Validators.required])
    });

    // this is for adding css to the invalid form
    this.reactiveForm.statusChanges.subscribe((value)=>{
      console.log(value);
      this.formStatus=value;
    })
  }



}
