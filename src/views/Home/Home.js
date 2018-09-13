import React from 'react';
import WhatAmI from './components/WhatAmI';
import WhatIDo from './components/WhatIDo';


class Home extends React.Component {
    render() {
        return (
            <div>
                <div className="App-intro">
                    <WhatAmI/>
                    <WhatIDo/>
                </div>
            </div>
        )
    }
}

export default Home;