import React from 'react';
import './styles.css'
import renderIcon from './responsive.svg'
import alertIcon from './bell.svg'
import fetchIcon from './fetch.png'

class WhatIDo extends React.Component {

    render() {
        const actions = [
            {
                image: fetchIcon,
                title: 'Fetch',
                text: <p>Fetches data from the <a href="https://kerala-university-api.herokuapp.com">API</a></p>
            }, 
            {
                image: renderIcon,
                title: 'Render',
                text: <p>Render them in a friendly way</p>,
            },
            {
                image: alertIcon,
                title: 'Notify',
                text: <p>Alerts you on new updates!</p>
            }
        ]
        return(
            <div>
                <h1>What I do?</h1>
                <div className='actionContainer'>
                {
                    actions.map((action, key) => 
                        <div key={key}>
                            <img src={action.image} alt='head' style={{
                                width: '150px',
                                height: '150px'
                            }}/>
                            <strong>{action.title}</strong>
                            {action.text}
                        </div>
                    )
                }
                </div>
            </div>
        )
    }
}

export default WhatIDo;