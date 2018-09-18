import React from 'react';
import ReactLoading from 'react-loading';
import './styles.css';
import {connect} from 'react-redux'

import {
    fetchData,
} from '../../reducers/resultsReducer/actions';


class GenericView extends React.Component {

    componentDidMount() {
        this.props.fetchData(this.props.url);
    }

    render() {
        const { loading, datas } = this.props;
        return (
            <div>
                {
                    loading ?
                        <div style={{ minHeight: window.innerHeight - 200, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                            <ReactLoading type={'spin'} color={'blue'} height={50} width={50} className='loader' />
                        </div>
                        :
                        <div>
                            {
                                datas.map(pub =>
                                    Object.keys(pub).map((date, key) => 
                                        <div key={key}>
                                        <code style={{borderRadius: 5, backgroundColor: 'rgba(96, 184, 207, 0.29)', position: 'sticky', top: 0}}>{date}</code>
                                        {
                                            pub[date].map((o, key) =>
                                            <div key={key} className="ListItem">
                                                <h4 className="Text">{o.title}</h4>
                                                <a className="downloadButton" href={o.link}><button className='downloadButton'>Download</button></a>
                                            </div>
                                            )
                                        }
                                        </div>
                                    )
                                )
                            }
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

const Notifications = connect(mapStateToProps, {fetchData})((props) => <GenericView url='https://kerala-university-api.herokuapp.com/notifications' {...props}/>)
const Results = connect(mapStateToProps, {fetchData})((props) => <GenericView url='https://kerala-university-api.herokuapp.com/results' {...props}/>)


export {
    Notifications,
    Results
}