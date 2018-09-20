import React from 'react';
import ReactLoading from 'react-loading';
import './styles.css';
import {connect} from 'react-redux'

import {
    fetchData,
} from '../../reducers/resultsReducer/actions';
import Search from './components/Search';
import ResultList from './components/ResultList';


class GenericListView extends React.Component {

    state = {
        filter: ''
    }

    componentDidMount() {
        this.props.fetchData(this.props.url);
    }

    onSearch = (filter) => {
        this.setState({filter: new RegExp(filter.replace('.', '').replace(' ', ''), 'i')})
    }

    render() {
        const { loading, datas } = this.props;
        const { filter } = this.state;
        return (
            <div>
                {
                    loading ?
                        <div style={{ minHeight: window.innerHeight - 200, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                            <ReactLoading type={'spin'} color={'blue'} height={50} width={50} className='loader' />
                        </div>
                        :
                        <div>
                            <Search onChange={this.onSearch}/>
                            <ResultList datas={datas} filter={filter}/>
                        </div>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    datas: state.resultsReducer.datas,
    loading: state.resultsReducer.loading,
})

const Notifications = connect(mapStateToProps, {fetchData})((props) => <GenericListView url='https://kerala-university-api.herokuapp.com/notifications' {...props}/>)
const Results = connect(mapStateToProps, {fetchData})((props) => <GenericListView url='https://kerala-university-api.herokuapp.com/results' {...props}/>)


export {
    Notifications,
    Results
}