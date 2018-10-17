import React from 'react';
import PropTypes from 'prop-types';
import Book from './components/book';

/* Idea for informational modal from Jason Michael White
    technical knowledge from Dave Ceddia at https://daveceddia.com/open-modal-in-react/ */


class Modal extends React.Component {
    render() {
    // Render nothing if the "show" prop is false
        
        const { book, toggleModal } = this.props 
    

    return !this.props.show (
        
        <div className = "modal">
            <div
                className="close-button"
                onClick = {toggleModal}
            >X</div>
            <div>
                <h4><cite>{book.title}</cite></h4>

                <div className="description">
                    {book.description === undefined ? `No synopsis available.` : book.description}
                </div>
            </div>
            <div className="footer">
            <button onClick = {toggleModal}>
                Close
            </button>
            </div>
        </div>
    );
    }
}


Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool,
    children: PropTypes.node
};

export default Modal;