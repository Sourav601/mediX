import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from 'src/Home_Components/home-page/home-page.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'',component:HomePageComponent},
  {path:'login',component:LoginComponent},
  {path:'employeeLogin',component:EmployeeLoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
