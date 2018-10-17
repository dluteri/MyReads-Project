import React, { Component } from 'react';
import Modal from './Modal';
import Book from './Book'

class Info extends Component {

    state = {
        isOpen: false
    };

    // toggles modal open 
    toggleModal = () => {
        this.setState({
            
            isOpen: !this.state.isOpen
        });
    }
}

render() {
    const { book } = this.props;

    return (
        <div className="info-button">
            <button onClick = {this.toggleModal}>
            
            <Modal
                show={this.state.isOpen}
                onClose={this.toggleModal}
                book={book}>
            </Modal>
            </button>

        </div>
    )
}


export default Info;