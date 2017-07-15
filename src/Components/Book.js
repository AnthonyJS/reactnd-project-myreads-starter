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
            width: props.Width,
            height: props.Height,
            backgroundImage: `url("${props.Image}")`
          }}
        />
        <BookShelfChanger />
      </div>
      <div className="book-title">
        {props.BookTitle}
      </div>
      <div className="book-authors">
        {props.Authors}
      </div>
    </div>
  );
};

Book.propTypes = {
  BookTitle: PropTypes.string.isRequired,
  Authors: PropTypes.string.isRequired,
  Image: PropTypes.string.isRequired,
  Width: PropTypes.number.isRequired,
  Height: PropTypes.number.isRequired
};

export default Book;
