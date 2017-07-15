import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BooksGrid from './BooksGrid'
import * as BooksAPI from '../BooksAPI'

class SearchPage extends Component {
  state = {}

  shelfBooks = this.props.books

  ensureBookHasCorrectShelf = book => {
    var shelfBook = this.shelfBooks.filter(item => item.id === book.id)

    if (shelfBook.length > 0) {
      book.shelf = shelfBook.shelf
    }

    return book
  }

  searchChange = event => {
    BooksAPI.search(event.target.value, 20).then(books => {
      books = books.map(this.ensureBookHasCorrectShelf)

      this.setState({ books })
    })
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <a className="close-search" onClick={() => this.props.showSearchPageHandler(false)}>
            Close
          </a>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" onChange={event => this.searchChange(event)} />
          </div>
        </div>
        <div className="search-books-results">
          {this.state.books &&
            <BooksGrid books={this.state.books} shelf="search" amendShelfHandler={this.props.amendShelfHandler} />}
        </div>
      </div>
    )
  }
}

SearchPage.propTypes = {
  books: PropTypes.array,
  showSearchPageHandler: PropTypes.func.isRequired,
  amendShelfHandler: PropTypes.func.isRequired
}

export default SearchPage
