import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProducttsService } from 'src/app/Services/productts.service';

@Component({
  selector: 'app-track-item',
  templateUrl: './track-item.component.html',
  styleUrls: ['./track-item.component.css']
})
export class TrackItemComponent {
item;
itemId;
product:any;
  constructor(private activeRoute: ActivatedRoute, private service:ProducttsService,
    private http:HttpClient, private router:Router){}

  ngOnInit(){
    this.activeRoute.paramMap.subscribe((param)=>{
      this.itemId = param.get('id');
      console.log(this.itemId);
      this.item = this.service.proList.find(x=>x.id == this.itemId);
    });

    this.http.get(`http://localhost:3030/orders/${this.itemId}`).subscribe((res:any)=>{
      if(res){
        console.log(res);
        this.product=res
        console.log(this.product.progress);
        
      }
    })
  }

}
