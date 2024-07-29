import React from "react";

class Mountingphase extends React.Component {


  constructor(props) {
    console.log(" called constructor");
    super(props);
    this.state = { name: "Harapriya" };
   
  }

  // static getDerivedStateFromProps(props, state) {
  //   console.log("getDerivedStateFromProps");
  //    if (props.name != state.name) {
  //      return { name: props.name };
  //   } else {
  //     return null;
  //   }
  // }

  componentDidMount() {
    console.log("componentDidMount");
    setTimeout(() => {
      this.setState({ name: "Bini" });
    }, 2000);
  }

  render() {
    console.log("render");
    return (
      <div>
        <h1>Display the detail</h1>
        <h2>My name is {this.state.name}</h2>
      </div>
    );
  }
}

export default Mountingphase;