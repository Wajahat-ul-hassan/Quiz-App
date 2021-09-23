import React from "react";
import { Listitems , Button , Inputs , Route } from "../../components";
import firebase from "firebase";
import { useRouteMatch } from "react-router";

const firebaseConfig = {
    apiKey: "AIzaSyCvJBM3uuvNewfhDaxIaCTkX7Pa8RQ16eA",
    authDomain: "portfolio-c3c55.firebaseapp.com",
    projectId: "portfolio-c3c55",
    storageBucket: "portfolio-c3c55.appspot.com",
    messagingSenderId: "610236843000",
    appId: "1:610236843000:web:e53a76bde046015c424c0d"
  };
  
class Admenpannel extends React.Component{
    
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
       
        return(
            <div>
               {this.state.category.map((val , ind) =>{
                return(
                    <>
                     <Listitems name={val} key={ind}/>
                     {/* <Button name="Add Question" id={ind} onflick={this.props.bb} /> */}
                     <Route link={`/addquestions/${val}`} rigister="Add Question" id={val} del={this.props.deete} />
                    </>
                      )
                      
            }
            )}
            <br/>
               <Inputs placeholder="enter Category" handle={this.props.categoryinput}/>
               <Button name="Add Category" onflick={this.props.Addcategory}/>
            </div>
        )
    }
}
export default Admenpannel;