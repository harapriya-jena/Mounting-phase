//mounting phase 

import React from "react";

class Mountingphase extends React.Component {


  //1st phase-constructor
  constructor(props) {
    console.log(" called constructor");
    super(props);
    this.state = { name: "Harapriya" };
   
  }


  //2nd phase-getDerivedStateFromProps
  // static getDerivedStateFromProps(props, state) {
  //   console.log("getDerivedStateFromProps");
  //    if (props.name != state.name) {
  //      return { name: props.name };
  //   } else {
  //     return null;
  //   }
  // }

 

  //3rd phase-render
  render() {
    console.log("render");
    return (
      <div>
        <h1>Display the detail</h1>
        <h2>My name is {this.state.name}</h2>
      </div>
    );
  }

  //4thphase-componentDidMount
   componentDidMount() {
    console.log("componentDidMount");
    setTimeout(() => {
      this.setState({ name: "Bini" });
    }, 2000);
  }
}

export default Mountingphase;
