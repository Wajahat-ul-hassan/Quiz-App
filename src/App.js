import logo from './logo.svg';
import './App.css';
import {Login , Signup , Studentpannel , Admenpannel , Html , Quiz} from "./container";
// import { Route } from './components';
import React from 'react';
import firebase from 'firebase';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
  
} from "react-router-dom";


const firebaseConfig = {
  apiKey: "AIzaSyCvJBM3uuvNewfhDaxIaCTkX7Pa8RQ16eA",
  authDomain: "portfolio-c3c55.firebaseapp.com",
  projectId: "portfolio-c3c55",
  storageBucket: "portfolio-c3c55.appspot.com",
  messagingSenderId: "610236843000",
  appId: "1:610236843000:web:e53a76bde046015c424c0d"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}

class App extends React.Component{
  constructor(props) {
    super(props);
  this.state={
    button:"",
    button1:false,
    loginemail:"",
    loginpasword:"",
    signupemail:"",
    signuppassword:"",
    categoryinput:"",
    islogin:false,
    allcategory:[]
  }
}
componentDidMount(){
  var abc =localStorage.getItem("route")
  console.log(abc)
  // window.location.href= "/quiz "
}

  handleloginemail =(e) =>{
    this.setState({loginemail:e.target.value})
    console.log(this.state.loginemail)
  } 
  handleloginpassword =(e) =>{
    this.setState({loginpasword:e.target.value})
    console.log(this.state.loginpassword)
  }
  showadminpannel=()=>{
  this.setState({button:false})
    this.setState({button1:false})
    this.setState({islogin:true})
  }

  loginclick = () =>{
    const { loginemail, loginpasword } = this.state

   if(loginemail && loginpasword){
     this.handlefirebaseLogin()
     }
     else if(loginemail){
       alert("please enter password")
     }
     else if(loginpasword){
      alert("please enter pasword")
    }
    else{
      alert("please enter email or password")
    }
    
  }
  
   handlefirebaseLogin = () => {
    const {loginemail, loginpasword } = this.state
    firebase.auth().signInWithEmailAndPassword(loginemail, loginpasword)
    .then(() => {
       
           localStorage.setItem('isLogin', true)
           alert('Login Hogaya')
           this.setState({loginemail:""})
           this.success("/admenpannel");
           
    })
    .catch((error) => {
        alert(error.message)
    })
}
success=(path)=>{
  // <Link to="/admenpannel">hello</Link>
  console.log("admenpannel")
  this.props.history.push(path);
  <Route  link={path}/>
}
signupemail =(e) =>{
  this.setState({signupemail:e.target.value})
  console.log(this.state.signupemail)
} 
signuppassword =(e) =>{
  this.setState({signuppassword:e.target.value})
  console.log(this.state.signuppassword)
} 
categoryinput =(e) =>{
  this.setState({categoryinput:e.target.value})
  console.log(this.state.signupemail)
} 
signup = () =>{
  const {signupemail , signuppassword} = this.state;
  if(signupemail && signuppassword ){
    this.handlefirebaseSignup()
  }
  else if(signupemail){
    alert(<div>plaese enter password</div>);
  }
  else if(signuppassword){
    alert(<div>plaese enter email</div>);
  }
  else{
    alert(<div>plaese enter email or password</div>);
  }
}
handlefirebaseSignup = () => {
  const { signupemail, signuppassword } = this.state
  firebase.auth().createUserWithEmailAndPassword(signupemail, signuppassword)
  .then(() => {
      alert('Signup Hogaya')
      this.setState({signupemail:"", signuppassword:""})
  })
  .catch((error) => {
    alert(error.message)
  })
}
  register=()=>{
 this.setState({button:false})
 this.setState({button1:true})
   
  }
  registerback=()=>{
    this.setState({button:true})
    this.setState({button1:false})
     }
     Addcategory = () =>{
      // console.log(this.state.text)
      // const user = JSON.parse(localStorage.getItem("usered"))
      // console.log(user)
      firebase.firestore()
      .collection("category").doc(this.state.categoryinput)
      .set({questions:""})
      .then(()=>{
          this.setState({categoryinput:""})
          alert("hoooo gayaaaa")
      })
      .catch((err)=>{
        console.log(err)
      })
    }
    deete = (id) => {
      console.log(this.state.button);
      this.setState({button:id})
     }

  render(){
  return (
    <div className="App">
    <Router>

      <Switch>
        <Route exact path="/"> 
        <Login 
        register={this.register} 
        handleloginemail={this.handleloginemail}
        handleloginpassword={this.handleloginpassword}
        loginclick={this.loginclick}  
        />
        </Route>

        <Route path="/signup">
        <Signup 
        gologin={this.registerback}
        signupemail={this.signupemail}
        signuppassword={this.signuppassword}
        signup={this.signup}
        />
        </Route>
        
        <Route path="/admenpannel" > 
         <Admenpannel 
          categoryinput={this.categoryinput}
          Addcategory={this.Addcategory}
          // deete={this.deete}
         /> 
         </Route>
         <Route path="/studentpannel">
           <Studentpannel/>
         </Route>
         
         <Route path="/addquestions/:id">
             <Html/>
         </Route>

         <Route path="/Quiz/:id">
          <Quiz/>
         </Route>
      </Switch>
    </Router>
    
    {/* {
      this.state.button && <Login 
        register={this.register} 
        handleloginemail={this.handleloginemail}
        handleloginpassword={this.handleloginpassword}
        loginclick={this.loginclick}  /> 
     }
     {
       this.state.button1 && <Signup 
        gologin={this.registerback}
        signupemail={this.signupemail}
        signuppassword={this.signuppassword}
        signup={this.signup}/>
     }
  
        <Studentpannel/>
        <Admenpannel 
          categoryinput={this.categoryinput}
          Addcategory={this.Addcategory}
        /> */}

     
    </div>
  );
  }
}

export default  App;
