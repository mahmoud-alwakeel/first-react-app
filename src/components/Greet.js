import React from "react";
// this is a functional component 


// function Greet() {
//     return (
//         <h1>Hello there</h1>
//     )
// }


const Greet = props => {
    console.log(props)
    // we enclose everything inside a Div as we must return only one HTML element
    return (
        <div>
            <h1>Greetings {props.name}, age: {props.age}</h1>
            {props.children}
        </div>
    )
}

// for most of the cases we will be used default export
export default Greet