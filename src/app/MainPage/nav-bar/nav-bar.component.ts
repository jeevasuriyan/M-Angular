import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ProducttsService } from 'src/app/Services/productts.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  constructor(private porserve: ProducttsService, private router: Router){}
  ngOnInit(){
    
  }
  
}
