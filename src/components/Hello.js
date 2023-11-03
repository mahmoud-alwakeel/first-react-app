import React from "react";
/* this file is for showing the difference between JSX and 
creating a react component using javascript */

const Hello = () => {
    //default JSX
    // return(
    //     <h1>hello weka</h1>
    // )

    return React.createElement(
        'div', 
        {id: 'hello', className: "dummyClass"},
         React.createElement('h1', null, 'Hello Weka')
    )
}


export default Hello