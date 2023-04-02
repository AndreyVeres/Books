import { maxResults } from 'service/consts';
import {
  FILTERACTIONS,
  ISetCategoryAction,
  ISetQueryAction,
  ISetSortTypeAction,
  ISetStartIndexAction,
} from './types';

export const filterActions = {
  setQuery: (query: string): ISetQueryAction => ({
    type: FILTERACTIONS.SEARC_QUERY_CHANGE,
    payload: query,
  }),
  setCategory: (category: string): ISetCategoryAction => ({
    type: FILTERACTIONS.CATEGORY_CHANGE,
    payload: category,
  }),
  setStartIndex: (): ISetStartIndexAction => ({
    type: FILTERACTIONS.START_INDEX_CHANGE,
    payload: maxResults,
  }),
  setSortType: (sortType: string): ISetSortTypeAction => ({
    type: FILTERACTIONS.SORT_TYPE_CHANGE,
    payload: sortType,
  }),
};
