import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {path: '', redirectTo: '/category', pathMatch: 'full'},
  {path: 'category', component: ListComponent},
  {path: 'add', component: DetailComponent},
  {path: 'edit/:id', component: DetailComponent}
]

@NgModule({
  declarations: [
    ListComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
  ],
  exports: [
    ListComponent,
    DetailComponent,
  ]
})
export class CategoryModule { }
