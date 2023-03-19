import BookDetails from 'pages/BookDetails';
import MainPage from 'pages/MainPage';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/:bookId" element={<BookDetails />} />
    </Routes>
  );
}

export default App;
