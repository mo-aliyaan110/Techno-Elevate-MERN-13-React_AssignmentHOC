import React from 'react';
import ReactDom from 'react-dom';
// import Voting from './components/Withvoting';
import VoteComps from './components/VoteComps';
function Index() {
    return (
        <div>
            <VoteComps/>
        </div>
    )
}
ReactDom.render(<Index/>, document.getElementById('root'));


