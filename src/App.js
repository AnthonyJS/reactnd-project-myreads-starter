import React from 'react';

import './App.css';
import SearchPage from './Components/SearchPage';
import MyReads from './Components/MyReads';
import * as BooksAPI from './BooksAPI';

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

  showSearchPage = visible => this.setState({ showSearchPage: visible });

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  }

  render() {
    return (
      <div className="app">
        {this.state.books &&
          (this.state.showSearchPage
            ? <SearchPage showSearchPageHandler={this.showSearchPage} books={this.state.books} />
            : <MyReads showSearchPageHandler={this.showSearchPage} books={this.state.books} />)}
      </div>
    );
  }
}

export default BooksApp;
