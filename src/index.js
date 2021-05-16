//import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

//Create a react component
const App = () => {
    const labelText = 'Enter Name: ';
    const buttonText = 'Submit'
    return (
        <div>
            <label className="label" htmlFor="name">{labelText}</label>
            <input id="name" type="text"/>
            <button style={{backgroundColor:"blue", color:"white"}}>{buttonText}</button>
        </div>
    )
};
//take the react component and show it on screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)