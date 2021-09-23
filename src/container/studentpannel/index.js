import { react } from "@babel/types";
import React from "react"
import firebase from "firebase";
import { Listitems , Button , Route } from "../../components";
 

const firebaseConfig = {
    apiKey: "AIzaSyCvJBM3uuvNewfhDaxIaCTkX7Pa8RQ16eA",
    authDomain: "portfolio-c3c55.firebaseapp.com",
    projectId: "portfolio-c3c55",
    storageBucket: "portfolio-c3c55.appspot.com",
    messagingSenderId: "610236843000",
    appId: "1:610236843000:web:e53a76bde046015c424c0d"
  };

class Studentpannel extends React.Component{
    state={
        category:[]
    }

    componentDidMount(){
        this.getdata()
      }

    getdata = () => {
          
       
        firebase.firestore()
        .collection("category")
        .onSnapshot((msg)=>{
            const data = []
            msg.forEach((val) =>{
            data.push(val.id)
            // console.log(data)
            
        })  
            this.setState({category:data});
            })
      }

    render(){
        console.log("hello")
        
        return(
            <div>
               <h1>hello</h1>
               {this.state.category.map((val , ind) =>{
                return(
                    <>
                     <Listitems name={val} key={ind}/>
                      {/* <Button name="Add Question" id={ind} onflick={this.props.bb} />  */}
                     <Route link={`/quiz/${val}`} rigister="start Quiz" id={val} del={this.props.deete} /> 
                    </>
                      )
                      
            }
            )}
        
            </div>
        )
    }
}

export default Studentpannel;
