import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms'

import { UserComponent } from './user.component';
import { UserService } from '../service/user.service';

// const routes: Routes = [
//   {path: '', redirectTo: '/login', pathMatch: 'full'},
//   // {path: 'login', component: UserComponent},
// ]

@NgModule({
  declarations: [ UserComponent],
  imports: [
    CommonModule,
    FormsModule,
    // RouterModule.forChild(routes),
  ],
  exports: [UserComponent],
  providers: [UserService]
})
export class UserModule { }
