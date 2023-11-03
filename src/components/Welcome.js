import React, { Component } from "react";
// this is a class component
class Welcome extends Component {
    render() {
        return <h1>welcome {this.props.name} {this.props.age}</h1>
    }
}

export default Welcome