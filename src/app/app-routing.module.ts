import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './guard/auth.guard';

const routes: Routes = [
  {path:'',
  pathMatch:'full',
  redirectTo:'/login'
  },
  {
    path:'login',
    title:'login',
    loadChildren:()=> import('./login/login.module').then((m) => m.LoginModule)
  },
  {
    path:'admin',
    title:'admin',
    loadChildren:()=> import('./admin/admin.module').then((m) => m.AdminModule),
    canActivate:[authGuard],
    data:['admin']
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
