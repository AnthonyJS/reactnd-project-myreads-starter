import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

const BooksGrid = props =>
  <ol className="books-grid">
    {props.isSearch
      ? props.books.map(book =>
          <li key={book.id}>
            <Book book={book} amendShelfHandler={props.amendShelfHandler} />
          </li>
        )
      : props.books.map(
          book =>
            book.shelf === props.shelf &&
            <li key={book.id}>
              <Book book={book} amendShelfHandler={props.amendShelfHandler} />
            </li>
        )}
  </ol>

BooksGrid.propTypes = {
  books: PropTypes.array.isRequired,
  amendShelfHandler: PropTypes.func.isRequired,
  shelf: PropTypes.string,
  isSearch: PropTypes.bool
}

export default BooksGrid
