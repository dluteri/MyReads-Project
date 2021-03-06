import React from 'react';
import PropTypes from 'prop-types';


/* Idea for informational modal from Jason Michael White
    technical knowledge from Dave Ceddia at https://daveceddia.com/open-modal-in-react/ */


class Modal extends React.Component {
    render() {
    // Render nothing if the "show" prop is false
        
        const { book, onClick } = this.props 
    

    return  (
        
        <div className = "modal">
            {/* alternate close model option */}
            <div
                className="close-button"
                onClick={() => onClick()}
            >X</div>
            <div>
            {/* Populates info in synopsis modal*/}
                <h4><cite>{book.title}</cite></h4>

                <div className="description">
                    {book.description === undefined ? `No synopsis available.` : book.description}
                </div>
            </div>
            <div className="footer">
            <button onClick = {onClick}>
                Close
            </button>
            </div>
        </div>
    );
    }
}


export default Modal;