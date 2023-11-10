import { HttpClient } from '@angular/common/http';
import {Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class ProducttsService {


  constructor(private http: HttpClient){ }
  
  proList: any[]=[
  {id:1, name:'Apple iPhone 13(128GB) - Midnight',rom:'128GB',ram:'8GB' ,price:'299$',"progress":'40',color:'Midnight',available:'Available', image:'assets/product/apple.jpg', all:'All',type:'Avail'},
  {id:2, name:'Realmi narzo N53 33W Fast-Charging ' ,rom:'64GB',ram:'16GB' ,price:'2999$',progress:'70',color:'white',available:'Available',image:'assets/product/realmi.jpg', all:'All',type:'Avail'},
  {id:3, name:'Samsung Galaxy S22 Ultra 5G (No-Cost EMI)',rom:'32GB',ram:'12GB' ,price:'1000$',progress:'80',color:'Black',available:'Available',image:'assets/product/samsung.jpg', all:'All',type:'Avail'},
  {id:4, name:'Redmi 12 5G Jade Black | High Performance',rom:'16GB',ram:'4GB' ,price:'1044$',progress:'90',color:'Black',available:'Available',image:'assets/product/redmi.jpg', all:'All',type:'NotAvail'},
  {id:5, name:'Nothing Phone(2) 5G | 6.7 In LTPO OLED AMOLED Display',rom:'256GB',ram:'32GB' ,price:'1599$',progress:'50',color:'Trans',available:'Available',image:'assets/product/nothing.jpg', all:'All',type:'Avail'},
  {id:6, name:'Nokia 2660 4G Volte Keypad with Dual SIM',rom:'1TB',ram:'8GB' ,price:'1000$',progress:'60',color:'Black',available:'Available',image:'assets/product/nokia.jpg', all:'All',type:'NotAvail'},
  {id:7, name:'Oppo A58 | 5000 mAh | 33W SUPERVOOC',rom:'128GB',ram:'16GB' ,price:'1099$',progress:'20',color:'Unicorn',available:'Available' ,image:'assets/product/oppo.jpg', all:'All',type:'Avail'},
  {id:8, name:'Honor 90 | Indias First Eye Risk-Free Display',rom:'64GB',ram:'8GB' ,price:'3099$',progress:'80',color:'Black',available:'Not Available',image:'assets/product/huwai.jpg', all:'All',type:'NotAvail'},
  {id:9, name:'Techno Pova 5 Pro 5G | 6.78"FHD + Dot-in Display',rom:'512GB',ram:'16GB' ,price:'99999$',progress:'100',color:'Mat Black',available:'Available',image:'assets/product/samsung.jpg', all:'All',type:'Avail'}

];

  getItems(){
    return this.proList;
  }

  getProducts(term :string=''):any[]{
    if(!term) return this.proList;

    return this.proList.filter(
      product=> product.name.toLowerCase().includes(term.toLowerCase())
    );
  }
  // getMyOrders(){
  //   console.log("calling get req for orders...!")
  //   return this.http.get("http://localhost:3030/orders");
  // }
  
}
