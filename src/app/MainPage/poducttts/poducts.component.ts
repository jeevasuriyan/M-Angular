import { Component, OnInit} from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { ProducttsService } from 'src/app/Services/productts.service';
import { Event } from '@angular/router';

@Component({
  selector: 'app-poducts',
  templateUrl: './poducts.component.html',
  styleUrls: ['./poducts.component.css'],
  providers:[ProducttsService]
})
export class PoductsComponent implements OnInit{

  search:string='';
  filterdProducts:any[]=[];

  constructor(private proSerivice: ProducttsService,private router:Router){}

  ngOnInit(): void {
    
    // to fetch all items
    this.searchProducts();
  }

  Notifyalert(){
    alert('We Will notify you when the product is available');
  }

  searchProducts(){
    this.filterdProducts= this.proSerivice.getProducts(this.search);
  }
}
