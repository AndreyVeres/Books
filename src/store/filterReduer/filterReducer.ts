import { FILTERACTIONS, IFilterActions } from './types';

export interface IFilterState {
  searchQuery: string;
  categories: string;
  sortType: string;
  startIndex: number;
}

export const filterInitialState: IFilterState = {
  searchQuery: '',
  categories: '',
  sortType: 'newest',
  startIndex: 0,
};

export const filterReducer = (state = filterInitialState, action: IFilterActions): IFilterState => {
  switch (action.type) {
    case FILTERACTIONS.CATEGORY_CHANGE:
      return { ...state, categories: action.payload };
    case FILTERACTIONS.SEARC_QUERY_CHANGE:
      return { ...state, searchQuery: action.payload };
    case FILTERACTIONS.SORT_TYPE_CHANGE:
      return { ...state, sortType: action.payload };
    case FILTERACTIONS.START_INDEX_CHANGE: {
      return { ...state, startIndex: state.startIndex + action.payload };
    }
    default:
      return state;
  }
};
