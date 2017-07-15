import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import BookShelf from './Components/BookShelf';
import SearchPage from './Components/SearchPage';

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  }

  showSearchPage = visible => this.setState({ showSearchPage: visible });

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage
          ? <SearchPage closeSearchPageHandler={this.showSearchPage} />
          : <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                {this.state.books &&
                  <div>
                    <BookShelf shelf="currentlyReading" title="Currently Reading" books={this.state.books} />
                    <BookShelf shelf="wantToRead" title="Want to Read" books={this.state.books} />
                    <BookShelf shelf="read" title="Read" books={this.state.books} />
                  </div>}
              </div>
              <div className="open-search">
                <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
              </div>
            </div>}
      </div>
    );
  }
}

export default BooksApp;
