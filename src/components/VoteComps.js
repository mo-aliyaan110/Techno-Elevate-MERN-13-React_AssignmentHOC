import React, { Component } from 'react';
import Python from './Python';
import Java from './Java';
import Php from './Php';
import Go from './Go';
import './votecomps.css'

class VoteComps extends Component {
    render(){
        return (
            <div className='main'>
                <h1> Vote your Language ! </h1>
                <Php/>
                <Python/>
                <Go/>
                <Java/>
            </div>
        )
    }
}

export default VoteComps;
