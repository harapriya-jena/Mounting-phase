import React from "react";
import UserDetails from "./UserDetails"; 
class Mountingphase extends React.Component {


  //1
  constructor(props){
    //console.log("call constructor");
    super(props);
    this.state={name:"Harapriya"}
   
  }

 



  render(){
   // console.log("call render");
    return(
      <div>
        <h1>Name is:{this.state.name}</h1>
        <button onClick={()=>this.setState({name:"Bini"})}>change name</button>
        <UserDetails name={this.state.name}/>
      </div>
    )
  }

  
}

export default Mountingphase;