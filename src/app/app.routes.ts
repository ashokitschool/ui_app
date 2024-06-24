import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProductsComponent } from './products/products.component';

export const routes: Routes = [

    {path: 'login', component: LoginComponent},
    {path: 'register', component:RegistrationComponent},
    {path:'products', component: ProductsComponent}

];
