import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor() {
    super();
    console.log("parent construct About");
  }
  componentDidMount(){
    console.log("parent componentDidMount About");
  }
  render() {
    console.log("parent render About");
    return (
      <div>
        <h1>About Us Page</h1>
        <h3>hello this about us page...</h3>
        <User name={"Vikas Hirave (functional)"} location={"Pune"}/>
        <UserClass name={"Vikas Hirave (class)"} location={"Mumbai class"} />
      </div>
    );
  };
}

export default About;
