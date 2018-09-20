import React from 'react';
import './style.css';

const Icon = (props) => {
    const { onClick, button, children, ...other } = props;
    if (button) {
        return (
            <button onClick={onClick} className='icon-button' {...other}>
                <i className='material-icons'>{props.children}</i>
            </button>
        )
    } else {
        return (
            <i className='material-icons'>{children}</i>
        )
    }
}

export default Icon;