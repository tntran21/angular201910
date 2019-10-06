import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { CategoryState } from '../../states/category.state';
import { Category } from '../../models/category.model';
import { GetCategorys, DeleteCategory } from 'src/app/actions/category.action';
import { CategoryModule } from '../category.module';
import { Observable } from 'rxjs';
import { Routes, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Select(CategoryState.getCategoryList) categorys$: Observable<Category[]>
  isChecked: boolean = false;

  constructor(
    private store: Store,
    private _router: Router,
    private _activeRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getCategorys()
  }

  getCategorys() {
    this.store.dispatch(new GetCategorys)
  }

  // changeChecked(event: any) {
  //   this.isChecked = !this.isChecked;
  //   console.log(event)
  // }

  deleteCategory(id: number) {
    this.store.dispatch(new DeleteCategory(id));
  }

  updateCategory(id: number) {
    this._router.navigate(['edit/'+id])
  }

  addCategory() {
    this._router.navigate(['add']);
  }
}
