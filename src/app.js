import React, {Component} from 'react';
import logo from './logo.svg';
import './app.scss';
import Steve from './steve/steve.js';


class App extends Component {
    render() {
        return (
            <div>
                <Steve/>
            </div>
        );
    }
}

export default App;
