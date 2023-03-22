import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { Filter } from './Filter';
import { filterActions } from '../../store/filterReduer/filterActions';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
const mockStore = configureMockStore();
const { setQuery, setSortType, setCategory } = filterActions;

describe('Filter component', () => {
  let store: ReturnType<typeof mockStore>;
  beforeEach(() => {
    store = mockStore({
      filterReducer: {
        searchQuery: '',
        sortType: 'newest',
        category: '',
      },
    });
  });

  it('should dispatch setQuery action when the input changes', () => {
    const { getByPlaceholderText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <Filter />
        </Provider>
      </BrowserRouter>
    );
    const input = getByPlaceholderText('Изучить Bookhub...');
    fireEvent.input(input, { target: { value: 'test' } });
    expect(store.getActions()).toContainEqual(setQuery('test'));
  });

  it('should dispatch setCategory action when the select changes', () => {
    const { getByLabelText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <Filter />
        </Provider>
      </BrowserRouter>
    );
    const select = getByLabelText('Category:');
    fireEvent.change(select, { target: { value: 'art' } });
    expect(store.getActions()).toContainEqual(setCategory('art'));
  });

  it('should dispatch sortType action when the select changes', () => {
    const { getByLabelText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <Filter />
        </Provider>
      </BrowserRouter>
    );
    const select = getByLabelText('Sort:');
    fireEvent.change(select, { target: { value: 'relevance' } });
    expect(store.getActions()).toContainEqual(setSortType('relevance'));
  });
});
