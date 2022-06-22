import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselComponent } from '../Home_Components/carousel/carousel.component';
import { CategoryCardsComponent } from '../Home_Components/category-cards/category-cards.component';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from '../Home_Components/home-page/home-page.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    CategoryCardsComponent,
    LoginComponent,
    HomePageComponent,
    EmployeeLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
