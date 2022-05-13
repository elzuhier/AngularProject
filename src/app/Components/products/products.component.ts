import { Component, OnInit } from '@angular/core';
import {DiscountOffers} from 'src/app/ViewModels/discount-offers'
import { IProduct } from 'src/app/ViewModels/iproduct';
import { ICategory } from 'src/app/ViewModels/icategory';

import { Store } from 'src/app/ViewModels/store';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {
  Discount:DiscountOffers;
  Store :Store ;
  _ClientName:string;
  get ClientName():string{
    return this._ClientName;
  }
  set ClientName(val: string) {
    //do some extra work here
    this._ClientName = val;
  }
  productList:IProduct[];
  // productListForCat:IProduct[];
  productListHeader = ["ID","Name","Quantity","price","Image","Category","Buy"]
  categoryList:ICategory[]=[{Name:"Cat1",ID:1},
                            {Name:"Cat2",ID:2},
                            {Name:"Cat3",ID:3},];

  
  constructor() {
    this.Discount = DiscountOffers['10%'];
    this._ClientName = "";
    var branches:string[]=["SSSS" , "AAAAAAa"];
    this.Store = new Store("Hamada",branches,"1.jpg");
    this.productList=[{ID:1,Name:"ProductHamada",Quantity:5,price:500,Img:'https://fakeimg.pl/50x20',CategoryID:1},
                       {ID:2,Name:"ProductHamada2",Quantity:0,price:500,Img:'https://fakeimg.pl/150x100',CategoryID:2},
                       {ID:3,Name:"ProductHamada3",Quantity:1,price:500,Img:'https://fakeimg.pl/150x100',CategoryID:3},
                      ]
                      
   }

  ngOnInit(): void {
  }
  Done():void{

  }
  onClick(prod:IProduct){
  //  let prod= this.productList.find(e=>e.ID==ID );
  //  prod?.Quantity=prod?.Quantity-1;
  prod.Quantity-=1;

  }
  CatProd:any=[]
  CatChange(CatId:any):void{
    this.CatProd=this.productList.filter(p=>p.CategoryID===parseInt(CatId))
  }

}
