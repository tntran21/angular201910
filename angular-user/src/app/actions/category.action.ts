import { Category } from '../models/category.model';

export class AddCategory {
  static readonly type = '[Category] Add'
  constructor(public payload: Category) {}
}

export class GetCategorys {
  static readonly type = '[Category] Get'
}

export class UpdateCategory {
  static readonly type = '[Category] Update';
  constructor(public payloadId: number, public payload: Category) {}
}

export class DeleteCategory {
  static readonly type = '[Category] Remove';
  constructor (public payloadId: number) {}
}

export class GetCategoryById {
  static readonly type = '[Category] Get';
  constructor(public payloadId: number,public payload: Category) {}
}