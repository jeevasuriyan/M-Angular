import { HttpClient } from '@angular/common/http';
import { Component, Input, ɵsetAlternateWeakRefImpl } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProducttsService } from 'src/app/Services/productts.service';

@Component({
  selector: 'app-buynowpage',
  templateUrl: './buynowpage.component.html',
  styleUrls: ['./buynowpage.component.css']
})
export class BuynowpageComponent {
  
  Item;
  ItemId;

  constructor(private activatedRoute: ActivatedRoute, private proservice: ProducttsService, private router:Router, private http: HttpClient){}
  ngOnInit(){
    this.ItemId = this.activatedRoute.snapshot.paramMap.get('id');
    this.Item = this.proservice.proList.find(x=> x.id== this.ItemId)
  }

  OrderSuccess(item){
    let bodydata={
        id: item.id,
        name: item.name,
        rom: item.rom,
        ram:item.ram,
        price:item.price,
        color:item.color,
        available:item.available,
        all:item.all,
        image:item.image,
        type:item.type,
        progress:item.progress,
      };
      console.log(bodydata);
      this.http.post("http://localhost:3030/orders",bodydata).subscribe((res)=>{
        if(res){
          console.log("Orders Placed")
        }
      })
      
      alert('Order Placed..!!');
    }

  back(){
    this.router.navigateByUrl("/home")
  }

}
