import React, { Component } from 'react'
import PropTypes from 'prop-types'

class BookShelfChanger extends Component {
  state = {
    shelf: this.props.shelf
  }

  /**
  * @description Ensures when selection changes, that the selection in the drop down list also changes
  * @param {event} event
  * @returns void
  */
  changeHandler = event => {
    this.setState({ shelf: event.target.value })
    this.props.amendShelfHandler(this.props.book, event.target.value)
  }

  render() {
    return (
      <div className="book-shelf-changer">
        <select value={this.state.shelf} onChange={event => this.changeHandler(event)}>
          <option value="none" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}

BookShelfChanger.propTypes = {
  amendShelfHandler: PropTypes.func.isRequired
}

export default BookShelfChanger
