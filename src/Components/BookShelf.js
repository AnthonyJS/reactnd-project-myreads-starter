import React from 'react';
import PropTypes from 'prop-types';
import BooksGrid from './BooksGrid';

const BookShelf = props =>
  <div className="bookshelf">
    <h2 className="bookshelf-title">
      {props.title}
    </h2>
    <div className="bookshelf-books">
      <BooksGrid books={props.books} shelf={props.shelf} amendShelfHandler={props.amendShelfHandler} />
    </div>
  </div>;

BookShelf.propTypes = {
  books: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  shelf: PropTypes.string.isRequired,
  amendShelfHandler: PropTypes.func.isRequired
};

export default BookShelf;
