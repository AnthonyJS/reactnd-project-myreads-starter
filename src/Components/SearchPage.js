import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BooksGrid from './BooksGrid'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'

class SearchPage extends Component {
  state = {}

  /**
  * @description Calls the search API each time the user updates the search term in the 
  * text box, and adds results to state
  * @param {event} event
  * @returns void
  */
  searchStringChangeHandler = event => {
    BooksAPI.search(event.target.value, 20).then(searchResultBooks => {
      if (!searchResultBooks || searchResultBooks.error) {
        this.setState({ searchResultBooks: null })
        return
      }

      searchResultBooks = searchResultBooks.map(this.ensureBookHasCorrectShelf)

      this.setState({ searchResultBooks })
    })
  }

  /**
  * @description Ensures that if the book is already on a shelf, the search results get updated with this info.
  * @param {object} book
  * @returns {object} book
  */
  ensureBookHasCorrectShelf = book => {
    const bookOnShelf = this.props.booksOnShelves.filter(item => item.id === book.id)[0]

    if (bookOnShelf) {
      book.shelf = bookOnShelf.shelf
    }

    return book
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to={'/'} className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={event => this.searchStringChangeHandler(event)}
            />
          </div>
        </div>
        <div className="search-books-results">
          {this.state.searchResultBooks &&
            <BooksGrid
              books={this.state.searchResultBooks}
              isSearch={true}
              amendShelfHandler={this.props.amendShelfHandler}
            />}
        </div>
      </div>
    )
  }
}

SearchPage.propTypes = {
  booksOnShelves: PropTypes.array,
  amendShelfHandler: PropTypes.func.isRequired
}

export default SearchPage
