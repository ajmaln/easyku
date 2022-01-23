import React from 'react';

const Icon = (props) => {
    const { onClick, button, children, ...other } = props;
    if (button) {
        return (
            <button onClick={onClick} {...other}>
                <i className='material-icons'>{props.children}</i>
            </button>
        )
    } else {
        return (
            <i className={`${'material-icons'} ${props.className}`}>{children}</i>
        )
    }
}

export default Icon;