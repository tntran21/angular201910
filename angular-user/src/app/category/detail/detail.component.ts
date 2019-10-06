import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../service/category.service';
import { Category } from '../../models/category.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { CategoryState } from '../../states/category.state';
import { UpdateCategory, AddCategory } from 'src/app/actions/category.action';
import { Select, Store } from '@ngxs/store';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  category: any = {};
  id: number;
  categoryForm: FormGroup;
  activeId: boolean;

  constructor(
    private _categoryService: CategoryService,
    private _router: Router,
    private _route: ActivatedRoute,
    private store: Store,
    private _location: Location,
  ) { 
    
  }

  ngOnInit() {
    this.id = parseInt(this._route.snapshot.paramMap.get('id'));

    if (this.id) {
      this.activeId = true;
      this.getCategory();
    }
    else {
      this.activeId = false;
    }
  
  }

  getCategory() {
    this.id = parseInt(this._route.snapshot.paramMap.get('id')) ;
    
    this._categoryService.getCategoryById(this.id).subscribe((data)=> {
      this.category = data
    });
  }

  updateCategory() {
    this.id = parseInt(this._route.snapshot.paramMap.get('id')) ;
    this.store.dispatch(new UpdateCategory(this.id, this.category));
    this._location.back();
  }

  addCategory() {
    this.store.dispatch(new AddCategory(this.category));
    this._location.back();
  }
}
