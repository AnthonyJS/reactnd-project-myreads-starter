import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

class BookShelf extends Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">
          {this.props.shelf}
        </h2>

        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.map(book =>
              <li key={book.id}>
                <Book bookData={book} />
              </li>
            )}
          </ol>
        </div>
      </div>
    );
  }
}

BookShelf.propTypes = {
  books: PropTypes.array
};

export default BookShelf;
