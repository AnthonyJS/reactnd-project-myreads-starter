import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

class BooksGrid extends Component {
  render() {
    return (
      <ol className="books-grid">
        {this.props.books.map(
          book =>
            book.shelf === this.props.shelf &&
            <li key={book.id}>
              <Book bookData={book} />
            </li>
        )}
      </ol>
    );
  }
}

BooksGrid.propTypes = {
  books: PropTypes.array.isRequired,
  shelf: PropTypes.string.isRequired
};

export default BooksGrid;
