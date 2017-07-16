import React from 'react'
import { Route } from 'react-router-dom'
import SearchPage from './Components/SearchPage'
import MyReads from './Components/MyReads'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {}

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books })
    })
  }

  /**
  * @description Adds, updates or removes a book from a shelf
  * @param {object} book
  * @param {string} shelf
  * @returns void
  */
  amendShelfForBook = (book, shelf) => {
    var updatedBooksOnShelves = this.state.books.filter(item => item.id !== book.id)

    if (shelf !== 'none') {
      book.shelf = shelf
      updatedBooksOnShelves.push(book)
    }

    this.setState({ books: updatedBooksOnShelves })

    BooksAPI.update(book, shelf)
  }

  render() {
    return (
      <div className="app">
        {this.state.books &&
          <div>
            <Route
              path="/"
              exact
              render={() => <MyReads books={this.state.books} amendShelfHandler={this.amendShelfForBook} />}
            />
            <Route
              path="/search/"
              render={() => <SearchPage booksOnShelves={this.state.books} amendShelfHandler={this.amendShelfForBook} />}
            />
          </div>}
      </div>
    )
  }
}

export default BooksApp
