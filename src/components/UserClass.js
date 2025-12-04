import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            count : 0,
        }
        console.log("child construct Userclass 2");
    }
    componentDidMount(){
        console.log("child componentDidMount Userclass 2");
    }
    render() {
        console.log("child render Userclass 2");
        const {name, location} = this.props;
        const {count} = this.state;
        return(
            <div className="user-card">
                <h2>Name: {name}</h2>
                <h2>Location: {location}</h2>
                <h2>Contact: @vikashirave</h2>
            </div>
        );
    }
}

export default UserClass;