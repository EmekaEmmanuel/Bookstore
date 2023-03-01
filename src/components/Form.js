import { React, useState } from 'react';
import '../css/Form.css';
import { v4 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBooks, addBook, fetchBooks } from '../app/features/book/bookSlice';

function Form() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const newBook = {
    item_id: uuid(),
    title,
    author,
    category,
  };

  const clearInputFields = () => {
    setTitle('');
    setAuthor('');
    setCategory('');
  };

  const handleAdd = (obj) => {
    dispatch(addBook(obj));
    dispatch((addBooks(obj)));
    clearInputFields();
    setTimeout(() => {
      dispatch(fetchBooks);
    }, 800);
  };

  const submitAndClear = (e) => {
    e.preventDefault();
    handleAdd(newBook);
  };

  return (
    <div className="app_container">
      <form className="form_tag" onSubmit={submitAndClear}>
        <h3>ADD NEW BOOK</h3>
        <div className="form_holder">
          <fieldset className="form_field border_none">
            <input value={title} onChange={(e) => setTitle(e.target.value)} className="title_width input_tag outline_none" type="text" placeholder="Book title" />
            <input value={category} onChange={(e) => setCategory(e.target.value)} className="title_width input_tag outline_none" type="text" placeholder="Book Category" />
            <select
              onChange={(e) => setAuthor(e.target
                .value)}
              name=""
              id=""
              className="dropdown_width input_tag outline_none"
            >
              <option value="Suzanne Collins">Suzanne Collins</option>
              <option value="Chinua Achebe">Chinua Achebe</option>
              <option value="Asake">Asake</option>
              <option value="Kiss Daniel">Kiss Daniel</option>
              <option value="Omah Lay">Omah Lay</option>
              <option value="Peace Itimi">Peace Itimi</option>
              <option value="Trevor Noah">Trevor Noah</option>
            </select>
          </fieldset>
          <fieldset className="form_action border_none">
            <button type="submit" className="button_width">ADD BOOK</button>
          </fieldset>
        </div>
      </form>
    </div>
  );
}

export default Form;
