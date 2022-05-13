import { Injectable } from '@angular/core';
import { IProduct } from '../ViewModels/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {
  productListHeader:string[]=["ID","Name","Quantity","price","Image","number","Buy"];
  productList:IProduct[];

  constructor() { 
    this.productList=[
      {ID:1,Name:"ProductHamada",Quantity:555,price:500,Img:'https://fakeimg.pl/50x20',CategoryID:1},
      {ID:2,Name:"ProductHamada2",Quantity:200,price:500,Img:'https://fakeimg.pl/50x20',CategoryID:2},
      {ID:3,Name:"ProductHamada3",Quantity:100,price:500,Img:'https://fakeimg.pl/50x20',CategoryID:3},
      {ID:4,Name:"ProductHamada4",Quantity:55,price:500,Img:'https://fakeimg.pl/50x20',CategoryID:1},
      {ID:5,Name:"ProductHamada5",Quantity:350,price:500,Img:'https://fakeimg.pl/50x20',CategoryID:2},
      {ID:6,Name:"ProductHamada6",Quantity:115,price:500,Img:'https://fakeimg.pl/50x20',CategoryID:3},
      
    
    ];
  }
  getAllProducts(): IProduct[] {
    return this.productList;
  }

  getProductsByCateogryID(catID: number): IProduct[] {
    if (catID == 0) {
      return this.productList;
    }
    else
      return this.productList.filter(prd => prd.CategoryID == catID);
  }

  getProductByID(prdID: number): IProduct|undefined
  {
    return this.productList.find(prd=>prd.ID==prdID);
  }
  getPrdIDsList(): number[]
  {
    return this.productList.map(prd=>prd.ID);
  }

}
