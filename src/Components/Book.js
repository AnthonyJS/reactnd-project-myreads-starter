import React from 'react'
import PropTypes from 'prop-types'
import BookShelfChanger from './BookShelfChanger'

const Book = props => {
  const { shelf } = props.book

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 188,
            backgroundImage: `url("${props.book.imageLinks.thumbnail}")`
          }}
        />
        <BookShelfChanger shelf={shelf} amendShelfHandler={props.amendShelfHandler} book={props.book} />
      </div>
      <div className="book-title">
        {props.book.title}
      </div>
      <div className="book-authors">
        {props.book.authors}
      </div>
    </div>
  )
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  amendShelfHandler: PropTypes.func.isRequired
}

export default Book
