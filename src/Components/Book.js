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
            width: props.bookData.Width,
            height: props.bookData.Height,
            backgroundImage: `url("${props.bookData.Image}")`
          }}
        />
        <BookShelfChanger />
      </div>
      <div className="book-title">
        {props.bookData.BookTitle}
      </div>
      <div className="book-authors">
        {props.bookData.Authors}
      </div>
    </div>
  );
};

Book.propTypes = {
  bookData: PropTypes.object,
};

export default Book;
