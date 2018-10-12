import React from 'react';
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI';

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      book: props.book
    }
  }

    render() {
        return (
            <li>
            <div className="book">
              <div className="book-top">
                {/*} TODO - add alt tags to images */}
                <div className="book-cover" style={{ width: 128, height: 185, backgroundImage: `url("${this.props.book.imageLinks && this.props.book.imageLinks.thumbnail || ""}")` }}></div>
                <div className="book-shelf-changer">
                  <select value={this.props.book.shelf || "none"} onChange={(event) => { this.props.updateBook(this.props.book, event.target.value) }}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Already Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
              <div className="book-title">{this.props.book.title}</div>
              {/*} TODO - seperate authors with comma... .join(', ') */}
              <div className="book-authors">{(this.props.book.authors && this.props.book.authors.join(', ')) || "No Author"}</div>
            </div>
          </li>
        );
    }
}

export default Book;