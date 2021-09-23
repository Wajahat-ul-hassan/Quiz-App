import React from "react"
import {Button , Inputs , Route} from "../../components"

class Signup extends React.Component{
    render(){
        return(
            <div>
                <h1>hello Signup</h1>
                {/* <Inputs placeholder="enter your name" type="name" handle={this.props.signupemail}/> */}
                <Inputs  placeholder="enter your email" type="email" handle={this.props.signupemail}/>
                <Inputs  placeholder="enter your roll no" type="roll" handle={this.props.signuppassword}/>
                <Button name="signup" onflick={this.props.signup}/>
                {/* <Button name="login" onflick={this.props.gologin}/> */}
                <Route link="/" rigister="go login"/>
            </div>
        )
    }
}

export default Signup;