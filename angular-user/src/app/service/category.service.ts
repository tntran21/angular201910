import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../models/category.model';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  url: string = 'http://localhost:3000/categories/'
  constructor(
    private _http: HttpClient,
  ) { }

  getCategories() {
    return this._http.get<Category[]>(this.url);
  }

  getCategoryById(id: number) {
    return this._http.get(this.url+ id);
  }

  deleteCategory(id: number) {
    return this._http.delete(this.url+id);
  }

  updateCategory(id: number, category: Category) {
    return this._http.put<Category>(this.url+id, category)
  }

  addCategory(category: Category) {
    return this._http.post<Category>(this.url, category)
  }
}
