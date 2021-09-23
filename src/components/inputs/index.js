
import React from  "react";

class Inputs extends React.Component{
    render(){
       return(
          <input type={this.props.type}  value={this.props.value} placeholder={this.props.placeholder} onChange={this.props.handle} ></input>
       )
    }
}

export default Inputs;