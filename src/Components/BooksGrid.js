import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

class BooksGrid extends Component {
  render() {
    return (
      <ol className="books-grid">
        {this.props.books.map(
          book =>
            (book.shelf === this.props.shelf || this.props.shelf === 'search') &&
            <li key={book.id}>
              <Book bookData={book} amendShelfHandler={this.props.amendShelfHandler} />
            </li>
        )}
      </ol>
    );
  }
}

BooksGrid.propTypes = {
  books: PropTypes.array.isRequired,
  shelf: PropTypes.string.isRequired,
  amendShelfHandler: PropTypes.func.isRequired
};

export default BooksGrid;
