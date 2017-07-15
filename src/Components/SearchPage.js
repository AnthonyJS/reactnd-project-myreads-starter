import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchPage extends Component {
  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <a className="close-search" onClick={() => this.props.closeSearchPageHandler(false)}>
            Close
          </a>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid" />
        </div>
      </div>
    );
  }
}

SearchPage.propTypes = {
  closeSearchPageHandler: PropTypes.func.isRequired
};

export default SearchPage;
