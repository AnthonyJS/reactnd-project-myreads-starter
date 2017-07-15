import React from 'react';
import PropTypes from 'prop-types';
import BookShelfChanger from './BookShelfChanger';

const Book = props => {
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
        <BookShelfChanger />
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
  bookData: PropTypes.object
};

export default Book;
