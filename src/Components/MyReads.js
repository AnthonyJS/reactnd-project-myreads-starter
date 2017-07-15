import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BookShelf from './BookShelf';

class MyReads extends Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf
              shelf="currentlyReading"
              title="Currently Reading"
              books={this.props.books}
              amendShelfHandler={this.props.amendShelfHandler}
            />
            <BookShelf
              shelf="wantToRead"
              title="Want to Read"
              books={this.props.books}
              amendShelfHandler={this.props.amendShelfHandler}
            />
            <BookShelf
              shelf="read"
              title="Read"
              books={this.props.books}
              amendShelfHandler={this.props.amendShelfHandler}
            />
          </div>
        </div>
        <div className="open-search">
          <a onClick={() => this.props.showSearchPageHandler(true)}>Add a book</a>
        </div>
      </div>
    );
  }
}

MyReads.propTypes = {
  showSearchPageHandler: PropTypes.func.isRequired,
  books: PropTypes.array.isRequired,
  amendShelfHandler: PropTypes.func.isRequired
};

export default MyReads;
