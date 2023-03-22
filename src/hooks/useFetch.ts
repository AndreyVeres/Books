import { maxResults } from 'service/consts';
import { getBooks } from 'service/googleBooks';
import { useActions } from './useActions';
import { useAppSelector } from './useAppSelector';

export const useFetch = () => {
  const { searchQuery, sortType, categories, startIndex } = useAppSelector(
    (state) => state.filterReducer
  );
  const { updateBooks, setStartIndex, setBooks, resetBooks } = useActions();

  const loadAndSetBooks = async (): Promise<void> => {
    resetBooks();

    getBooks(searchQuery, sortType, categories).then(({ items, totalItems }) => {
      setBooks({
        books: items,
        total: totalItems,
      });
    });
  };

  const loadAndUpdateBooks = async (): Promise<void> => {
    getBooks(searchQuery, sortType, categories, startIndex).then(({ items }) => {
      updateBooks(items);
      setStartIndex(maxResults);
    });
  };

  return { loadAndSetBooks, loadAndUpdateBooks };
};
