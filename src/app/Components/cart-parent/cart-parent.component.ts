import { style } from '@angular/animations';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ICategory } from 'src/app/ViewModels/icategory';
import { IProduct } from 'src/app/ViewModels/iproduct';
import { IshoppingCartItems } from 'src/app/ViewModels/ishopping-cart-items';
import { CartChildComponent } from '../cart-child/cart-child.component';

@Component({
  selector: 'app-cart-parent',
  templateUrl: './cart-parent.component.html',
  styleUrls: ['./cart-parent.component.scss']
})
export class CartParentComponent implements OnInit,AfterViewInit {
  categoryList:ICategory[];
  SelectedCategory:number=0;
  receivedOrderTotalPrice:number=0;
  ShoppingCartItem:IshoppingCartItems[]=[];
  TotalCartPrice:number=0;
  

  // Non-null assertion operator
  @ViewChild('Select_item') SelecetItemInp!:ElementRef;
  @ViewChild(CartChildComponent) CartChildComponentObj!:CartChildComponent;
  
  constructor() {
    this.categoryList=[
                        {Name:"Cat1",ID:1},
                        {Name:"Cat2",ID:2},
                        {Name:"Cat3",ID:3},
];
    
   }
  ngAfterViewInit(): void {
   let x=this.SelecetItemInp.nativeElement.value;
    console.log(x);
 
    // this.CartChildComponentObj.CatProd.forEach(element => {
    //   element.Quantity
      
    // });
  }

  ngOnInit(): void {
  }
  
  updateTotalPrice(totalPrice: number)
  {
    this.receivedOrderTotalPrice=totalPrice;
    console.log(this.receivedOrderTotalPrice)

  }
   
  updateAddToCart(prod:any)
  {
    this.ShoppingCartItem.push(prod);
    this.ShoppingCartItem.forEach(element => {
    this.TotalCartPrice+=((element.unitPrice*element.selectedQuantity)+0.014);
      
    });
    console.log(this.ShoppingCartItem)
    
  }
  DecreaseQuantity(){
    this.CartChildComponentObj.CatProd.forEach((product: { ID: number; Quantity: number; }) => {
        this.ShoppingCartItem.forEach(cartItem => {
          if(product.ID==cartItem.productID)
            product.Quantity-=cartItem.selectedQuantity;
          
        });
    });
  
}
}
