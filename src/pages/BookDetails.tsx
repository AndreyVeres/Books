import { useStore } from 'hooks/useStore';
import React from 'react';
import { useParams } from 'react-router-dom';

export default function BookDetails(): JSX.Element {
  const { bookId } = useParams();
  const { books } = useStore();

  const myBook = books.find((book) => book.id === bookId);

  return <div>{myBook?.volumeInfo.title}</div>;
}
