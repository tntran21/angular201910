import {State, Action, StateContext, Selector} from '@ngxs/store';
import { Category } from '../models/category.model';
import { GetCategorys, GetCategoryById, DeleteCategory, UpdateCategory, AddCategory } from '../actions/category.action';
import { CategoryService } from '../service/category.service';
import { CategoryModule } from '../category/category.module';

export class CategoryStateModel {
  categorys: Category[];
  selectedId: Category;
  cateId: number
}

@State<CategoryStateModel>({
  name: 'categoryState',
  defaults: {
    categorys: [],
    selectedId: null,
    cateId: null
  }
})

export class CategoryState {

  constructor(
    private _categoryService: CategoryService
  ) {}

  // Get list category
  @Selector()
    static getCategoryList(state: CategoryStateModel) {
      return state.categorys;
    }

    @Selector()
    static getSelectedTodo(state: CategoryStateModel) {
        return state.selectedId;
    }

  @Action(AddCategory)
    addCategory({getState, patchState}: StateContext<CategoryStateModel>, {payload}: AddCategory) {
      return this._categoryService.addCategory(payload).subscribe((data)=> {
        const state = getState();
        patchState ({
          categorys: [...state.categorys, data]
        })
      })
    }
  
  @Action(GetCategorys)
    getCategory({getState, patchState}: StateContext<CategoryStateModel>) {
      return this._categoryService.getCategories().subscribe((data) => {
        const state = getState();
        patchState({
          ...state,
          categorys: data,
        });
      });
    }

  //  @Action(GetCategoryById)
  //   getCategoryById({getState, patchState}: StateContext<CategoryStateModel>, {payloadId, payload}: GetCategoryById) {
  //     return this._categoryService.getCategoryById(payloadId).subscribe((data) => {
  //       const state = getState();
  //       const cateList = [...state.categorys];
  //       const index = cateList.findIndex(item => item.id === payloadId);
  //       patchState({
  //         ...state,
  //         cateId: index
  //       });
  //     });
  //   }

    @Action(DeleteCategory)
    deleteCategory({getState, patchState}: StateContext<CategoryStateModel>, {payloadId}: DeleteCategory) {
      return this._categoryService.deleteCategory(payloadId).subscribe(() => {
        const state = getState();
        const filteredArr = state.categorys.filter(item => item.id !== payloadId)
        patchState({
          ...state,
          categorys: filteredArr
        })
      })
    }

    @Action(UpdateCategory) 
    updateCategory({getState, patchState}: StateContext<CategoryStateModel>, {payload, payloadId}: UpdateCategory) {
      return this._categoryService.updateCategory(payloadId, payload).subscribe((data) => {
        const state = getState();
        const cateList = [...state.categorys];
        const index = cateList.findIndex(item => item.id === payloadId);
        cateList[index] = data;
        patchState({
          ...state,
          categorys: cateList
        });
      });
    }

}