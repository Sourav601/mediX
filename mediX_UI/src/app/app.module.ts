import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { NavbarComponent } from './navbar/navbar.component';
import { AppComponent } from './app.component';
import { CarouselComponent } from '../Home_Components/carousel/carousel.component';
import { CategoryCardsComponent } from '../Home_Components/category-cards/category-cards.component';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from '../Home_Components/home-page/home-page.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { FooterComponent } from './footer/footer.component';
import { SignUpComponent } from './sign-up/sign-up.component';

import { ApiService } from './services/api/api.service';

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
