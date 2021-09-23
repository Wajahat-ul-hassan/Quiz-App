import React from "react"
import {Button , Inputs , Route} from "../../components"

class Login extends React.Component{
    render(){
        return(
            <div>
                <h1>hello Login</h1>
                <Inputs placeholder="enter your email" type="email" handle={this.props.handleloginemail}
                />
                <Inputs  placeholder="enter your roll no" type="password"  handle={this.props.handleloginpassword} />
                <Button name="Login" onflick={this.props.loginclick}/>
                {/* <Button onflick={this.props.register} name="registerationsigup" link="/signup"/> */}
                <Route link="/signup" rigister="register your self"/>
                {/* <button >register your self</button> */}
            </div>
        )
    }
}

export default Login;