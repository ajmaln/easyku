import React from 'react';
import Icon from '../../../../components/Icon';
import './style.css'


export default class Search extends React.Component {
    state = {
        value: ''
    }

    onChange = (e) => {
        this.setState({value: e.target.value}, this.props.onChange(e.target.value))
    }

    render() {
        return (
            <div className='search-container'>
                <Icon style={{margin: '0 5px'}}>search</Icon>
                <input name='search' className='search-bar' value={this.state.value} onChange={this.onChange} placeholder='Search'/>
                <Icon button onClick={() => this.setState({value: ''}, this.props.onChange(''))}>close</Icon>
            </div>
        )
    }
}