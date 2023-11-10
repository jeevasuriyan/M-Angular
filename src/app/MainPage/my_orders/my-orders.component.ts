import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProducttsService } from 'src/app/Services/productts.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent {

  
  myOrders:any;
  constructor(private servicets:ProducttsService, private http:HttpClient, private router:Router){}


  ngOnInit(){
    this.http.get("http://localhost:3030/orders").subscribe((res:any)=>{
      console.log(res.data+"this is from my-order....");
      this.myOrders=res.data;
      
    })
  }
  
  delete(cancelItem){
    this.http.delete(`http://localhost:3030/orders/${cancelItem._id}`).subscribe((res)=>{
      if(res){
        alert("Order Calncelled");
      }
    });
  }
  back(){
    this.router.navigateByUrl("/home");
  }
}
