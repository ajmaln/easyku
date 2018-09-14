import React from 'react';


class WhatAmI extends React.Component {

    render() {
        return(
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                margin: '60px 0',
                padding: '0 8px'
            }}>
                <h1>What Am I?</h1>
                <p>
                    I am a frontend for the {<code><a href="https://kerala-university-api.herokuapp.com">kerala-university-api</a></code>}, which scraps the {<code><a href='https://exams.keralauniversity.ac.in'>official kerala university site</a></code>} for results and notifications.
                </p>
            </div>
        )
    }
}

export default WhatAmI