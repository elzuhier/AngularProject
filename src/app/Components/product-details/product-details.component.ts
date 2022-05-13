import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsServiceService } from 'src/app/Services/products-service.service';
import { IProduct } from 'src/app/ViewModels/iproduct';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  private currPrdID:number=0;
  private prdIDsList: number[]=[];
  currPrd:IProduct|undefined=undefined;
  constructor(
    private activatedRoute:ActivatedRoute
    , private router: Router
    , private prdService:ProductsServiceService
    , private location: Location) { }

  ngOnInit(): void {
    this.prdIDsList=this.prdService.getPrdIDsList();
    this.activatedRoute.paramMap.subscribe(paramMap=>{
      this.currPrdID=Number(paramMap.get("pid"));
      this.currPrd=this.prdService.getProductByID(this.currPrdID);
    });
  }
  goBack()
  {
      this.location.back();
  }
  nextProduct()
  {
    let index = this.prdIDsList.findIndex((prd)=>prd==this.currPrdID)
    if(index<this.prdIDsList.length-1)
    {
      this.currPrdID=this.prdIDsList[index+1];
      this.router.navigate(['Products',this.currPrdID])
    }
  }
  isFirstItem():boolean
  {
    return this.currPrdID==this.prdIDsList[0];
  }

  islastItem():boolean
  {
      return this.currPrdID==this.prdIDsList[this.prdIDsList.length-1];
  }
  prevProduct()
  {
    let index = this.prdIDsList.findIndex((prd)=>prd==this.currPrdID)
    if(index!=0)
    {
      this.currPrdID=this.prdIDsList[index-1];
      this.router.navigate(['Products',this.currPrdID]);
    }
  }

}
