// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

function getTime() {
    return (new Date()).toLocaleTimeString();
}

// Create a react component
const App = () => {
    const labelText = "Enter name:";
    const buttonText = "Click me";
    const buttonStyle = {backgroundColor:'blue', color:'white'};

    return (
        <div>
            <label className="label" htmlFor="name">{labelText}</label>
            <input id="name" type="text"/>
            <button style= {buttonStyle}> {buttonText} </button>
            <hr/>
            <div>Hora actual:</div>
            <h3>{getTime()}</h3>
        </div>
    );
}

// Take the react component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);