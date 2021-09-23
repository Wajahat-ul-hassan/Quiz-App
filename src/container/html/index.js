import React from "react"
import {Inputs , Button} from "../../components"
import firebase from "firebase";


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
class Html extends React.Component{
  constructor(props) {
    super(props);
    this.state={
        question:"",
        option1:"",
        option2:"",
        option3:"",
        option4:"",
        cate:"",
        questions:[]
    }
  }
    
    handleinput=(e , key)=>{
    this.setState({[key]:e.target.value} )
    // console.log(key)
  }
  componentDidMount(){
    this.getdata()
  }
  
  getdata = () => {
    // console.log(this.state.cate)
    var nam = window.location.pathname.slice(14, window.location.pathname.length)
    this.setState({cate:nam})
    console.log()
    
        firebase.firestore()
        .collection("category").doc(nam).collection("Questions")
        .onSnapshot((msg)=>{
            const data = []
            msg.forEach((val) =>{
              var string = val.data()
            data.push(string)
            console.log(string)
            console.log(data)
            
        })  
            this.setState({questions:data});
            })
      }
      Addquestion = () =>{
        firebase.firestore()
        .collection("category").doc(this.state.cate).collection("Questions")
        .add({
              
          // "QUESTION":[
          //       {
              "questions":this.state.question,
              "option1":this.state.option1,
              "option2":this.state.option2,
              "option3":this.state.option3,
              "rightoption":this.state.option4,
          //   }
          // ]
        })  
        .then(()=>{
            this.setState({categoryinput:""})
            alert("hoooo gayaaaa")
        })
        .catch((err)=>{
          console.log(err)
        })
      }
   
      render(){
        // console.log(window.location.pathname, window.location.pathname.indexOf("/addquestions/"))
        // this.setState({cate:nam})
        console.log(this.state.cate)
        return(
            <div>
                 {this.state.questions.map((val , ind)=>{
                     console.log(val.questions)
                   return(
                    <div>
                    <h3>{val.questions}</h3>
                    <ul>
                    
                    <li>{val.option1}</li>
                    <li>{val.option2}</li>
                    <li>{val.option3}</li>
                    
                    </ul>
                    </div> 
                    
                     
                   )
                 })}
                <Inputs placeholder="write Question"     type="text" handle={(e)=>{this.handleinput(e,"question")}}/><br/>
                <Inputs placeholder="Option1"   type="text" handle={(e)=>{this.handleinput(e,"option1")}}/><br/>
                <Inputs placeholder="Option2" type="text" handle={(e)=>{this.handleinput(e,"option2")}}/><br/>
                <Inputs placeholder="Option3"    handle={(e)=>{this.handleinput(e,"option3")}}/><br/>
                <Inputs placeholder="Rightoption"    handle={(e)=>{this.handleinput(e,"option4")}}/><br/>
                <Button name="Add Questions" onflick={this.Addquestion}/>

            </div>
        )
    }
}

export default Html;