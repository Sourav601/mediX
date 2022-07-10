import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ApiService } from './services/api/api.service';
import { ProfileComponent } from './user/profile/profile.component';
import { ViewByCategoryComponent } from './viewProduct/view-by-category/view-by-category.component';
import { SingleProductInListComponent } from './viewProduct/single-product-in-list/single-product-in-list.component';
import { ItemPageComponent } from './viewProduct/item-page/item-page.component';
import { NavbarLoginComponent } from './navbar-login/navbar-login.component';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { HomePageComponent } from './Home_Components/home-page/home-page.component';
import { CarouselComponent } from './Home_Components/carousel/carousel.component';
import { CategoryCardsComponent } from './Home_Components/category-cards/category-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    CategoryCardsComponent,
    LoginComponent,
    HomePageComponent,
    EmployeeLoginComponent,
    FooterComponent,
    SignUpComponent,
    ProfileComponent,
    ViewByCategoryComponent,
    SingleProductInListComponent,
    ItemPageComponent,
    NavbarLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
