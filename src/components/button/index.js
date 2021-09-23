import React from "react"

class Button extends React.Component{
    render(){
        return(
            <button onClick={this.props.onflick}>
              {this.props.name}
              <link to={this.props.link}></link>
            </button>
        )
    }
}
export default Button;