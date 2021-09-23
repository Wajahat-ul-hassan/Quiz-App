import React from "react";
import firebase from "firebase";
import { Radiobutton } from "../../components";


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
class Quiz extends React.Component{
 state = {
     cate:"",
     questions:[],
     val:0,
     rightanswer:[]
 }

    componentDidMount(){
        this.getdata()
      }
      
      getdata = () => {
        // console.log(this.state.cate)
        var nam = window.location.pathname.slice(6, window.location.pathname.length)
        this.setState({cate:nam})
        console.log()
        
            firebase.firestore()
            .collection("category").doc(nam).collection("Questions")
            .onSnapshot((msg)=>{
                const data = []
                msg.forEach((val) =>{
                  data.push(val.data())
                console.log(data)
                
            })  
                this.setState({questions:data});
                })
          }
           slect = (id) => { 
              // this.setState({rightanswer:id})
              // console.log(this.state.rightanswer)
          }
          next = () =>{
            this.setState({val:this.state.val + 1})
            var nam1 = window.location.pathname.slice(6, window.location.pathname.length)
            var obj = {
              Quiz:nam1,
              index:this.state.val,
            }
            localStorage.setItem("route" , JSON.stringify(obj));
          }
    render(){
        var nam1 = window.location.pathname.slice(6, window.location.pathname.length)
        return(
            <div>
                <h1>{nam1} Quiz</h1>
                { !!this.state.questions.length && 
                    <div>
                    <h3>{this.state.questions[this.state.val].questions}</h3>
                    <ul>
                    
                    <li><Radiobutton type="radio" value={this.state.questions[this.state.val].option1} select={this.slect}/>{this.state.questions[this.state.val].option1}</li>
                    <li><Radiobutton  type="radio"  value={this.state.questions[this.state.val].option2} select={this.slect}/>{this.state.questions[this.state.val].option2}</li>
                    <li><Radiobutton  type="radio" value={this.state.questions[this.state.val].option3} select={this.slect}/>{this.state.questions[this.state.val].option3}</li>
                    
                    </ul>
                     <button disabled={this.state.questions.length-1 == this.state.val} onClick={this.next}> Next</button>
                    </div> 
                    
                   
                 }
            </div>
        )
    }
}
export default Quiz;