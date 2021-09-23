import React from "react";
import {
    Link
    
  } from "react-router-dom";


class Route extends React.Component{
    
    render(){
        // console.log(this.props.state)
        return(
            <div>
                <Link to={this.props.link } coures={this.props.rigister} >{this.props.rigister}</Link>
            </div>
            
        )
    }
}

export default Route;