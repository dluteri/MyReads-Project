import React from 'react';
import { Link } from 'react-router-dom'

class Book extends React.Component {
  componentDidMount() {
    console.log(this);
  }

    render() {
        return (
            <li>
            <div className="book">
              <div className="book-top">
                {/*} TODO - add alt tags to images */}
                <div className="book-cover" style={{ width: 128, height: 185, backgroundImage: `url("${this.props.book.imageLinks && this.props.book.imageLinks.thumbnail || ""}")` }}></div>
                <div className="book-shelf-changer">
                  <select>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
              <div className="book-title">{this.props.book.title}</div>
              <div className="book-authors">{this.props.book.authors.join(', ') || "No Author..."  }</div>
            </div>
          </li>
        );
    }
}

export default Book;