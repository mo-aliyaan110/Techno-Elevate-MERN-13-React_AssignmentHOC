import React from 'react';
import ReactDom from 'react-dom';
import Voting from './components/Withvoting';
function Index() {
    return (
        <div>
            <WithVoting/>
        </div>
    )
}
ReactDom.render(<Index/>, document.getElementById('root'));


