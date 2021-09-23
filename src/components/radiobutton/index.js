import React from "react";

class Radiobutton extends React.Component{
    render(){
        return(
            <div>
                <input type={this.props.type} value={this.props.value} name="options" onClick={()=>this.props.select(this.props.value)}/> 
            </div>
        )
    }
}
export default Radiobutton;