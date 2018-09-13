import React from 'react';


class WhatAmI extends React.Component {

    render() {
        return(
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                margin: '60px 0'
            }}>
                <h1>What Am I?</h1>
                <p>
                    I am a frontend for the {<a href="https://kerala-university-api.herokuapp.com">kerala-university-api</a>}, which scraps the {<a href='https://exams.keralauniversity.ac.in'>official kerala university site</a>} for results and notifications.
                </p>
            </div>
        )
    }
}

export default WhatAmI