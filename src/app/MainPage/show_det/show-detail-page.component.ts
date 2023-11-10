import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProducttsService } from 'src/app/Services/productts.service';

@Component({
  selector: 'app-show-detail-page',
  templateUrl: './show-detail-page.component.html',
  styleUrls: ['./show-detail-page.component.css']
})
export class ShowDetailPageComponent implements OnInit{

  product;
  productId;
  
  // id:string = "";
  // name:string="";
  // rom:string="";
  // ram:string="";
  // price:string="";
  // color:string="";
  // available:string="";
  // image:string="";
  // all:string="";
  // type:string="";




  constructor(private productservice: ProducttsService, private activatedRoute: ActivatedRoute, private router:Router,private http: HttpClient){  }

  ngOnInit(){
    this.productId = this.activatedRoute.snapshot.paramMap.get('id');
    this.product = this.productservice.proList.find(x=> x.id== this.productId);
  }

  back(){
    this.router.navigateByUrl("/home");
  }
  addtocart(cartPro){
    let bodydata={
      id: cartPro.id,
      name: cartPro.name,
      rom: cartPro.rom,
      ram:cartPro.ram,
      price:cartPro.price,
      color:cartPro.color,
      available:cartPro.available,
      all:cartPro.all,
      image:cartPro.image,
      type:cartPro.type,
      progress:cartPro.progress
    };
    console.log(bodydata);
    this.http.post("http://localhost:3030/cartItems",bodydata).subscribe((res)=>{
      if(res){
        console.log("Item added to cart")
      }
    })
    
    alert('Donee...!!');
  }
}
