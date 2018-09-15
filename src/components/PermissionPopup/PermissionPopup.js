import React from 'react';
import './styles.css'


class PermissionPopup extends React.Component {

    render() {
        const {hidden} = this.props;
        return (
                
                <div className={`popup slider ${hidden ? 'closed': ''}`}>
                    <div className='header'>
                        <button onClick={this.props.handleClose} className='close'>x</button>
                        <h3>Hi there..</h3>
                    </div>
                    
                    <div className='text'>
                        Do you want to get alerted on new results and notifications?
                    </div>
                    <button onClick={this.props.handleYes} className='button right'>
                        Yes
                    </button>
                </div>
           
        )
    }
}


export default PermissionPopup;