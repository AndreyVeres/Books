import { FILTERACTIONS, ISetCategoryAction, ISetQueryAction, ISetSortTypeAction } from './types';

export const setQueryAction = (query: string): ISetQueryAction => ({
  type: FILTERACTIONS.SEARC_QUERY_CHANGE,
  payload: query,
});
export const setCategoryAction = (category: string): ISetCategoryAction => ({
  type: FILTERACTIONS.CATEGORY_CHANGE,
  payload: category,
});
export const setSortTypeAction = (sortType: string): ISetSortTypeAction => ({
  type: FILTERACTIONS.SORT_TYPE_CHANGE,
  payload: sortType,
});
