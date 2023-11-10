import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { ProducttsService } from 'src/app/Services/productts.service';
import { Event } from '@angular/router';

@Component({
  selector: 'app-cartpage',
  templateUrl: './cartpage.component.html',
  styleUrls: ['./cartpage.component.css']
})
export class CartpageComponent {

  onProTouch= false;
  itemSpec:any;

  allCartItems:any;
  constructor(private fromservice: ProducttsService, private http: HttpClient, private router: Router){
  }

  ngOnInit(){
    // this.fromservice.getCartItems().subscribe((res:any)=>{
    //   console.log(res.data)
    //   this.allCartItems=res.data;
    // });

    this.http.get("http://localhost:3030/cartitems").subscribe((res:any)=>{
      console.log(res.data+"this is from cart observale....");
      this.allCartItems=res.data;
      
    })
  }

  buy(items){
    console.log(items);
    let bodydata={
      id: items.id,
      name: items.name,
      rom: items.rom,
      ram:items.ram,
      price:items.price,
      color:items.color,
      available:items.available,
      all:items.all,
      image:items.image,
      type:items.type,
      progress:items.progress
    };
    console.log(bodydata);
    this.http.post("http://localhost:3030/orders",bodydata).subscribe((res)=>{
      if(res){
        console.log("Order Placed from cart..!!")
      }
    })
    
    alert('Order placedd!!');
  }

  delete(item){
    this.http.delete(`http://localhost:3030/cartitems/${item._id}`).subscribe((res)=>{
      if(res){
        alert("deleteed succesfully");
      }
      else{
        alert("error")
      }
    })
  }
  back(){
    this.router.navigateByUrl("/home");
  }

  onItemTouch(items){
    
    console.log("item is clicked to view");
    
    this.onProTouch = true;
    this.itemSpec = items;
    console.log(this.itemSpec);
  }


}