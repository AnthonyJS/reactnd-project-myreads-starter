import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const BooksGrid = props =>
  <ol className="books-grid">
    {props.books.map(
      book =>
        (book.shelf === props.shelf || props.shelf === 'search') &&
        <li key={book.id}>
          <Book book={book} amendShelfHandler={props.amendShelfHandler} />
        </li>
    )}
  </ol>;

BooksGrid.propTypes = {
  books: PropTypes.array.isRequired,
  shelf: PropTypes.string.isRequired,
  amendShelfHandler: PropTypes.func.isRequired
};

export default BooksGrid;
