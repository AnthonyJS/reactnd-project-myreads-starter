import React from 'react';
import PropTypes from 'prop-types';

const BookShelfChanger = props => {
  return (
    <div className="book-shelf-changer">
      <select value={props.shelf} onChange={event => props.amendShelfHandler(event.target.value)}>
        <option value="none" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

BookShelfChanger.propTypes = {
  amendShelfHandler: PropTypes.func.isRequired
};

export default BookShelfChanger;
