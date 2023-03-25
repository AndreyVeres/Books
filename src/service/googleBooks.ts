import { basicURL, maxResults } from './consts';
import { IGoogleBooksResponse } from './types';

export const getBooks = async (
  searchQuery: string,
  sortType: string,
  categories: string,
  startIndex = 0
): Promise<IGoogleBooksResponse> => {
  const URL = `${basicURL}${searchQuery}+subject:${categories}&maxResults=${maxResults}&startIndex=${startIndex}&orderBy=${sortType}&${process.env.API_KEY}`;
  const request = await fetch(URL);
  const response = await request.json();
  return response;
};

export const getBook = async (query: string) => {
  const URL = `${basicURL}${query}`;

  const request = await fetch(URL);
  const response = await request.json();

  return response;
};
