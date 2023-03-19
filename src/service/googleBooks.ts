import { basicURL, maxResults, API_KEY } from './consts';
import { IGoogleBooksResponse } from './types';

export const getBooks = async (
  searchQuery: string,
  sortType: string,
  categories: string,
  startIndex = 0
): Promise<IGoogleBooksResponse> => {
  const URL = `${basicURL}${searchQuery}+subject:${categories}&maxResults=${maxResults}&startIndex=${startIndex}&orderBy=${sortType}&${API_KEY}`;
  const request = await fetch(URL);
  const response = await request.json();
  return response;
};

export const getBook = async (bookId: string) => {
  return fetch(`${basicURL}${bookId}`).then((book) => book.json());
};
