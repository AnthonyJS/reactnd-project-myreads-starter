import React from 'react'
import PropTypes from 'prop-types'
import BookShelf from './BookShelf'
import { Link } from 'react-router-dom'

const MyReads = props =>
  <div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
    <div className="list-books-content">
      <div>
        <BookShelf
          shelf="currentlyReading"
          title="Currently Reading"
          books={props.books}
          amendShelfHandler={props.amendShelfHandler}
        />
        <BookShelf
          shelf="wantToRead"
          title="Want to Read"
          books={props.books}
          amendShelfHandler={props.amendShelfHandler}
        />
        <BookShelf shelf="read" title="Read" books={props.books} amendShelfHandler={props.amendShelfHandler} />
      </div>
    </div>
    <div className="open-search">
      <Link to={'/search/'} activeClassName="active">
        Add a book
      </Link>
    </div>
  </div>

MyReads.propTypes = {
  books: PropTypes.array.isRequired,
  amendShelfHandler: PropTypes.func.isRequired
}

export default MyReads
