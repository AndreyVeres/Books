export enum FILTERACTIONS {
  SEARC_QUERY_CHANGE = 'SEARC_QUERY_CHANGE',
  CATEGORY_CHANGE = 'CATEGORY_CHANGE',
  SORT_TYPE_CHANGE = 'ORTINGBY_CHANGE',
}

export interface ISetQueryAction {
  type: FILTERACTIONS.SEARC_QUERY_CHANGE;
  payload: string;
}
export interface ISetCategoryAction {
  type: FILTERACTIONS.CATEGORY_CHANGE;
  payload: string;
}
export interface ISetSortTypeAction {
  type: FILTERACTIONS.SORT_TYPE_CHANGE;
  payload: string;
}

export type IFilterActions = ISetQueryAction | ISetSortTypeAction | ISetCategoryAction;
