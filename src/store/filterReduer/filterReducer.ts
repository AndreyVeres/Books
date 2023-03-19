import { FILTERACTIONS, IFilterActions } from './types';

export interface IFilterState {
  searchQuery: string;
  categories: string;
  sortType: string;
}

export const filterInitialState: IFilterState = {
  searchQuery: '',
  categories: '',
  sortType: 'newest',
};

export const filterReducer = (state = filterInitialState, action: IFilterActions): IFilterState => {
  switch (action.type) {
    case FILTERACTIONS.CATEGORY_CHANGE:
      return { ...state, categories: action.payload };
    case FILTERACTIONS.SEARC_QUERY_CHANGE:
      return { ...state, searchQuery: action.payload };
    case FILTERACTIONS.SORT_TYPE_CHANGE:
      return { ...state, sortType: action.payload };
    default:
      return state;
  }
};
