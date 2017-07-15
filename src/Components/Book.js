import React from 'react';
import PropTypes from 'prop-types';
import BookShelfChanger from './BookShelfChanger';

const Book = props => {
  const { shelf } = props.bookData;

  const updateShelf = newShelf => {
    props.amendShelfHandler(props.bookData, newShelf);
  };

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 188,
            backgroundImage: `url("${props.bookData.imageLinks.thumbnail}")`
          }}
        />
        <BookShelfChanger shelf={shelf} amendShelfHandler={updateShelf} />
      </div>
      <div className="book-title">
        {props.bookData.title}
      </div>
      <div className="book-authors">
        {props.bookData.authors}
      </div>
    </div>
  );
};

Book.propTypes = {
  bookData: PropTypes.object,
  amendShelfHandler: PropTypes.func.isRequired
};

export default Book;
