import React from 'react';
import Modal from './../Modal';


class Book extends React.Component {
  state = {
    book: this.props.book,
    isOpen: false
  };
  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    // populates book covers
      return (
          <li>
          <div className="book">
            <div className="book-top">
              <div className="book-cover"  alt="Book Cover"
                style={{ width: 128, height: 185, 
                backgroundImage: `url("${this.props.book.imageLinks && 
                this.props.book.imageLinks.thumbnail ||
                "https://via.placeholder.com/128x185?text=No Image"}")`
            }}>
              </div>
    {/* Assigns a book to a shelf, and on event changes shelves */}          
              <div className="book-shelf-changer">
                <select 
                  aria-label="listbox" 
                  value={this.props.book.shelf || "none"} 
                  onChange={(event) => { this.props.updateBook(this.props.book, event.target.value) }
                }>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Already Read</option>  {/* Changed from "Read" for better clarity */}
                    <option value="none">Remove from Reading List</option>   {/* Changed from "None" for better clarity */}
                </select>
              </div>
    {/* Toggles info modal */}
              <div
                className="book-info"
                onClick = {this.toggleModal}/>
                {this.state.isOpen && (
                  <Modal  
                    show={this.state.isOpen}
                    onClick={this.toggleModal}
                    book={this.props.book}
                  />
                )}
              </div> 
            </div>
    {/* Populates title and author(s) */}
            <div 
              className="book-title">{this.props.book.title} 
            </div>
            <div 
              className="book-authors">{(this.props.book.authors && this.props.book.authors.join(', ')) || "No Author"}
            </div>

        </li>
      );
  }
}

export default Book;

