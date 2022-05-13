import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartParentComponent } from './Components/cart-parent/cart-parent.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { ProductsComponent } from './Components/products/products.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';





const routes: Routes = [
  {path:'Login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path: '', component:MainLayoutComponent, children: [

  {path:'',redirectTo:'/CartParent',pathMatch:'full'},
  {path:'CartParent',component:CartParentComponent},
  {path:'Products/:pid', component:ProductDetailsComponent},
  {path:'Products', component:ProductsComponent},

  ]},

{path:'**', component:NotFoundComponent},


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
