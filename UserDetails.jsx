import React from "react";
import App from "./App";

class UserDetails extends React.Component{
 constructor(props){
    console.log("call constructor");
    super(props);

    this.state={
        name: this.props.username,
        message: ""
    }
  
 }

 shouldComponentUpdate(){
    console.log("call shouldcomponentupdate");
    return true;
 }


 static getDerivedStateFromProps(nextpropos,prevstate){
         console.log("call getderivedstatefromprops");
         if(nextpropos.name != prevstate.name){
            return {name :nextpropos.name};
         }
         else{
            return null;
         }

 }


    render(){
        console.log("call render");
        return(
            <div>
                <h1>userdetails</h1>
                   
                <h2>Username is:{this.props.name}</h2>
                <p>{this.state.message}</p>
            </div>
        )
    }


    componentDidMount(){
        console.log("call componentdidmount");
        setTimeout(()=>{
          this.setState({message: "welcome to our website"});
    
        },3000);
      }
}


export default UserDetails;