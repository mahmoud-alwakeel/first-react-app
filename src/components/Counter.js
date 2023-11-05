import React, { Component } from "react";

class Counter extends Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    incrementFive() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

     increment() {
        this.setState({
            count: this.state.count + 1
        }, () => {
            console.log("callback value", this.state.count)
        }
        )
        
        // uncomment this and change value in butoon's onclick to increment by five
        // this.setState((previousState) => ({
        //     count: previousState.count + 1
        // }))

        // this value will be less than the value appearing on the sccreen by one as it's printed first as the setState is an asynchronos method
        console.log(this.state.count)
    }
    render () {
        return(
            <div>
                <h3>count: {this.state.count}</h3>
                <button onClick= {() => this.increment()}>increment</button>
            </div>
        )
    }
}
export default Counter;