import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { ProductsComponent } from './Components/products/products.component';
import { FooterComponent } from './Components/footer/footer.component';
import { SideMenuComponent } from './Components/side-menu/side-menu.component';
import { FormsModule } from '@angular/forms';
import { RoundBorderShadowDirective } from './Directives/round-border-shadow.directive';
import { NationalIDBirthReturnPipe } from './Pipes/national-idbirth-return.pipe';
import { ShoppingCartComponent } from './Components/shopping-cart/shopping-cart.component';
import { CreditCardPipe } from './Pipes/credit-card.pipe';
import { CartParentComponent } from './Components/cart-parent/cart-parent.component';
import { CartChildComponent } from './Components/cart-child/cart-child.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    FooterComponent,
    SideMenuComponent,
    RoundBorderShadowDirective,
    NationalIDBirthReturnPipe,
    ShoppingCartComponent,
    CreditCardPipe,
    CartParentComponent,
    CartChildComponent,
    ProductDetailsComponent,
    NotFoundComponent,
    MainLayoutComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
