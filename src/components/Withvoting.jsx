import React, {Component} from 'react'

function WithVoting(OrgComp) { 
    
        class VotingLogic extends Component{
            constructor(){
                super()
                this.state = {
                    count:0
                }
            }
            increment = () =>{
                this.setState({count:++this.state.count})
            }
            render(){
                return(
                    
                    <OrgComp count = {this.state.count} increment = {this.increment} />
                    
                )
            }
           
        }
    return VotingLogic;
}
export default WithVoting;
