import React, {Component} from 'react';
import './app.scss';
import Steve from './steve/steve.js';
import Menu from './menu/menu.js';
import Sandbox from "./sandbox/sandbox";


class App extends Component {
    render() {
        return (
            <div>
                <div className="header">
                    <div className="logo"></div>
                    <div className="name"><span className="brown">MC</span><span className="green">Genome</span></div>
                </div>
                <div className="container">
                    <Menu/>
                    <div id="main">
                        <Sandbox/>
                    </div>
                </div>

            </div>
        );
    }
}

export default App;
