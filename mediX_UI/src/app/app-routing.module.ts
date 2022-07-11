import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { HomePageComponent } from './Home_Components/home-page/home-page.component';
import { ProfileComponent } from './user/profile/profile.component';
import { ItemPageComponent } from './viewProduct/item-page/item-page.component';
import { ViewByCategoryComponent } from './viewProduct/view-by-category/view-by-category.component';
import { ViewCartComponent } from './cart/view-cart/view-cart.component';
import { PrescriptionUPLDComponent } from './prescription-upld/prescription-upld.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'employeeLogin', component: EmployeeLoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'profile', component: ProfileComponent },
  {
    path: 'bycat/:categoryType/:categoryValue',
    component: ViewByCategoryComponent,
  },
  { path: 'item', component: ItemPageComponent },
  {path : 'cart', component: ViewCartComponent},
  {path: 'prescription', component: PrescriptionUPLDComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
