import React from 'react';
import Icon from '../../../../components/Icon';
import './style.css'


export default ({ onChange }) => (
    <div className='search-container'>
        <Icon style={{ margin: '0 5px' }}>search</Icon>
        <input name='search' className='search-bar' onChange={event => onChange(event.target.value)} placeholder='Search' />
        <Icon button onClick={() => onChange('')}>close</Icon>
    </div>
)
