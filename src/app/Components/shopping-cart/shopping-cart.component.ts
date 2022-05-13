import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  purchaseDate:string =new Date().toDateString();
  TotalPrice=5000;

  constructor() { }

  ngOnInit(): void {
  }
  

}
