import React from 'react';
import { PropTypes } from 'prop-types';
import '../css/Book.css';
import { useDispatch } from 'react-redux';
import { deleteBook, deleteBooks, fetchBooks } from '../app/features/book/bookSlice';

function Book(props) {
  const dispatch = useDispatch();
  const { mybooks } = props;

  const handleDelete = (objId) => {
    dispatch(deleteBook(objId));
    dispatch(deleteBooks(objId));
    setTimeout(() => {
      dispatch(fetchBooks());
    }, 500);
  };

  return (
    <div className="app_container">
      <section className="cards_section">
        {mybooks.map((mybook) => (
          <article className="card_article" key={mybook.id}>
            <div className="card_left">
              <div className="card_description">
                <p className="font1">
                  {mybook.category}
                </p>
                <h3 className="font2">
                  {' '}
                  {mybook.title}
                </h3>
                <h4 className="font3">
                  {mybook.author}
                </h4>
              </div>
              <ul className="font4 card_interaction">
                <button type="button" className="interact_btn">Comments</button>
                <div className="vertical_line" />
                <button onClick={() => handleDelete(mybook.id)} type="button" className="interact_btn">Remove</button>
                <div className="vertical_line" />
                <button type="button" className="interact_btn">Edit</button>
              </ul>
            </div>

            <div className="card_mid">
              <figure className="card_progressbar">
                <div className="card_progressbar_mark" />
              </figure>
              <div className="card_progress_status">
                <h2 className="font5">64%</h2>
                <h6 className="font6">Completed</h6>
              </div>
            </div>

            <div className="card_right">
              <div className="card_current_chapter">
                <h4 className="font7">CURRENT CHAPTER</h4>
                <p className="font8">Chapter 17</p>
                <button type="button" className="update_btn border_none font9">UPDATE PROGRESS</button>
              </div>
            </div>

          </article>
        ))}
      </section>
    </div>
  );
}

Book.propTypes = {
  mybooks: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.object)).isRequired,
};

export default Book;
