import React, { useState } from 'react';
import ReactLoading from 'react-loading';
import './styles.css';
import Search from './components/Search';
import ResultList from './components/ResultList';


const GenericListView = ({ data, loading }) => {

    const [{
        filters,
        filter_string
    }, setState] = useState({
        filters: [],
        filter_string: '',
    })

    const onSearch = (filter_string) => {
        const filters = filter_string.split(' ');
        const filter_regexes = filters.reduce((res, filter) => filter !== '' ? [...res, new RegExp(filter.replace('.', '').replace(' ', ''), 'i')] : res, [])
        setState(prevState => ({ ...prevState, filters: filter_regexes, filter_string }))
    }

    return (
        <div>
            {
                loading ?
                    <div style={{ minHeight: window.innerHeight - 200, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                        <ReactLoading type={'spin'} color={'blue'} height={50} width={50} className='loader' />
                    </div>
                    :
                    <div>
                        <Search onChange={onSearch} />
                        <ResultList datas={data} filters={filters} filter_string={filter_string} />
                    </div>
            }
        </div>
    )

}

const Notifications = ({ data, loading }) => <GenericListView type='notifications' data={data.notifications} loading={loading} />
const Results = ({ data, loading }) => <GenericListView type='results' data={data.results} loading={loading} />

export {
    Notifications,
    Results
}