import React, { useState } from 'react';
import Book from '../components/Book';
import Form from '../components/Form';
import Nav from '../components/Nav';
import '../css/BookPage.css';

function BookPage() {
  const mockbooks = [
    { title: 'The Hunger Games', author: '  Suzanne Collins' },
    { title: 'Things Fall Apart', author: 'Chinua Achebe' },
    { title: 'Terminator', author: 'Asake' },
    { title: 'Rich Till I Die', author: 'Kiss Daniel' },
  ];
  const [mybooks] = useState(mockbooks);
  return (
    <div>
      <Nav />
      <Book mybooks={mybooks} />
      <Form />
    </div>
  );
}

export default BookPage;
