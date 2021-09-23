import React from "react";

class Listitems extends React.Component{
    render(){
        return(
            <ul>
                <li>{this.props.name} {this.props.key}</li>
            </ul>
        )
        
        
    }
}
export default Listitems;