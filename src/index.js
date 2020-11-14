import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    return (
        <h1>
            Bundle size demo
        </h1>
    );
}

const domContainer = document.querySelector('#app');
ReactDOM.render(<App />, domContainer);