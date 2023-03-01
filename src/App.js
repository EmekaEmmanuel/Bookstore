import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BookPage from './Pages/BookPage';
import CategoryPage from './Pages/CategoryPage';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<BookPage />} />
          <Route path="/category" element={<CategoryPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
