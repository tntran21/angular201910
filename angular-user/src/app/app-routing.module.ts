import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './category/list/list.component';
import { DetailComponent } from './category/detail/detail.component';
import { UserModule } from './user/user.module';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  // {path: 'category', component: ListComponent},
  {path: '', loadChildren: './category/category.module#CategoryModule'},
  // {path: 'login', loadChildren: './user/user.module#UserModule'}, 
   {path: 'login', component: UserComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
