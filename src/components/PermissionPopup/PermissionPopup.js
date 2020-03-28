import React from 'react';
import './styles.css'


const PermissionPopup = ({ hidden, handleClose, handleYes }) => {
    return (
        <div className={`popup slider ${hidden ? 'closed' : ''}`}>
            <div className='header'>
                <button onClick={handleClose} className='close'>x</button>
                <h3>Hi there..</h3>
            </div>

            <div className='text'>
                Do you want to get alerted on new results and notifications?
                    </div>
            <button onClick={handleYes} className='button right'>
                Yes
                    </button>
        </div>

    )
}


export default PermissionPopup;