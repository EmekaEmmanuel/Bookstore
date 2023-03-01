import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from '../components/Book';
import Form from '../components/Form';
import Nav from '../components/Nav';
import '../css/BookPage.css';
import {
  fetchBooks,
} from '../redux/book/bookSlice';

function BookPage() {
  const mybooks = useSelector((state) => state.book.books);

  const dispatch = useDispatch();

  useEffect(() => {
    let active = true;
    (async () => {
      if (active) {
        dispatch(fetchBooks());
      }
    })();
    return () => {
      active = false;
    };
  }, [dispatch]);

  return (
    <div>
      <Nav />
      <Book mybooks={mybooks} />
      <Form />
    </div>
  );
}

export default BookPage;
