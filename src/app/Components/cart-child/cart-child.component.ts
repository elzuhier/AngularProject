import { Component, EventEmitter, Input, OnInit, Output, SimpleChange } from '@angular/core';
import { AnyForUntypedForms } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsServiceService } from 'src/app/Services/products-service.service';
import { IProduct } from 'src/app/ViewModels/iproduct';
import { IshoppingCartItems } from 'src/app/ViewModels/ishopping-cart-items';

@Component({
  selector: 'app-cart-child',
  templateUrl: './cart-child.component.html',
  styleUrls: ['./cart-child.component.scss']
})
export class CartChildComponent implements OnInit {
  // productList:IProduct[];
  productListHeader:string[]=["ID","Name","Quantity","price","Image","number","Details","Buy"];
  @Input() recievedSelectedCatID:number=0;
  orderTotalPrice:number=0;
  @Output() onTotalPriceChanged:EventEmitter<number>;
  product:IshoppingCartItems={productID:0,productName:"",selectedQuantity:0,unitPrice:0};
  @Output() onAddToCartChanged:EventEmitter<IshoppingCartItems>

  constructor(private router:Router,
    private prdService:ProductsServiceService) { 

    this.onTotalPriceChanged = new EventEmitter<number>();
    this.onAddToCartChanged = new EventEmitter<IshoppingCartItems>();
    // this.productList=[
    //                     {ID:1,Name:"ProductHamada",Quantity:555,price:500,Img:'https://fakeimg.pl/50x20',CategoryID:1},
    //                     {ID:2,Name:"ProductHamada2",Quantity:200,price:500,Img:'https://fakeimg.pl/50x20',CategoryID:2},
    //                     {ID:3,Name:"ProductHamada3",Quantity:100,price:500,Img:'https://fakeimg.pl/50x20',CategoryID:3},
    //                     {ID:4,Name:"ProductHamada4",Quantity:55,price:500,Img:'https://fakeimg.pl/50x20',CategoryID:1},
    //                     {ID:5,Name:"ProductHamada5",Quantity:350,price:500,Img:'https://fakeimg.pl/50x20',CategoryID:2},
    //                     {ID:6,Name:"ProductHamada6",Quantity:115,price:500,Img:'https://fakeimg.pl/50x20',CategoryID:3},
                        
                      
    // ]
  }
  ngOnChanges(changes:SimpleChange):void{
    this.CatProd=this.prdService.getProductsByCateogryID(this.recievedSelectedCatID);
    
    // console.log(this.recievedSelectedCatID)
    // if(this.recievedSelectedCatID==0)
    // {
    //   this.CatProd=this.productList;
    // }
    // else
    // {
    //   this.CatProd=this.productList.filter(prd=>prd.CategoryID==this.recievedSelectedCatID);
    // }
  }

  ngOnInit(): void {
  }
  productsTrackBy(index: number, item: IProduct)
  {
    return item.ID;
  }
  CatProd:any=[];

  CatChange(CatId:any):void{
    this.CatProd=this.prdService.productList.filter(p=>p.CategoryID===parseInt(CatId))
  }
  updateOrderTotalPrice(itemsCount:number, price:number){
   
    this.orderTotalPrice+=(itemsCount*price);
    this.onTotalPriceChanged.emit(this.orderTotalPrice);
    
    }
    // TotalCartPrice:number=0;
    updateAddToCart(prod:any,itemsCount:number, price:number)
    {

      let ProductGotFromAddToCart:IshoppingCartItems={
        "productName":prod.Name,
        "productID":prod.ID,
        "selectedQuantity":itemsCount,
        "unitPrice":price
      }
      
      this.onAddToCartChanged.emit(ProductGotFromAddToCart);
    }

    openProductDetails(id:number)
    {
        this.router.navigate(['/Products',id]);
    }


}
