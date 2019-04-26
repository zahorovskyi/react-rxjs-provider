import React from 'react';
import { BehaviorSubject, interval } from "rxjs";
import { Provider } from "../../src";

import Title from './Title';

import './App.css';

function App() {
    return (
        <Provider>
            <div className="App">
                <Title/>
            </div>
        </Provider>
    );
}

export default App;
