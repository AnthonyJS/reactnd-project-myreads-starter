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

  amendShelf = (book, shelf) => {
    var newShelf = this.state.books.filter(item => item.id !== book.id)

    if (shelf !== 'none') {
      book.shelf = shelf
      newShelf.push(book)
    }

    this.setState({ books: newShelf })

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
              render={() => <MyReads books={this.state.books} amendShelfHandler={this.amendShelf} />}
            />
            <Route
              path="/search/"
              render={() => <SearchPage books={this.state.books} amendShelfHandler={this.amendShelf} />}
            />
          </div>}
      </div>
    )
  }
}

export default BooksApp
