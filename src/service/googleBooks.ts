import { basicURL } from './consts';

export const getBook = async (query: string) => {
  const URL = `${basicURL}${query}`;

  const request = await fetch(URL);
  const response = await request.json();

  return response;
};
