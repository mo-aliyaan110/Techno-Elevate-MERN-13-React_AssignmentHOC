import React, { Component } from 'react';

import WithVoting from './Withvoting';

class Python extends Component {
   
    
    render()
    
    {
         console.log("Done");
        //  here we are doing destructuring 
        let {count, increment} = this.props
        const styles = {
    
            display:"flex",
            justifyContent:'center',
            
            
            
        }
        return (
            
            <div style = {styles}>
                <div className='python'style = {{margin:"5px 0px",backgroundColor:"#fad390",border:"1px solid black", width:"250px", padding:"10px"}}>
                   {count} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;   Python &nbsp; &nbsp; &nbsp; <button onClick={() =>increment()} style={{color:"green"}} > Click Here </button>
                </div>          
            </div>
        )
    }
}

export default WithVoting(Python);
 