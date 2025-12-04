import { useState } from "react";
import React from "react";

class User extends React.Component{

    constructor(){
        super();
        console.log("child construct User 1");
    }
    componentDidMount(){
        console.log("child componentdimount User 1");
    }
    render(){
        console.log("child construct User 1");
        return(
        <div className="user-card">
            {/* <h1>count: {count}</h1>
            <h1>count2: {count2}</h1>
            <h2>Name: {name}</h2>
            <h2>Location: {location}</h2> */}
            <h2>Contact: @vikashirave</h2>
        </div>
        );
    }

}
export default User;