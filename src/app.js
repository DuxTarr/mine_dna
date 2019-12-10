import React, {Component} from 'react';
import './app.scss';
import Steve from './steve/steve.js';
import Menu from './menu/menu.js';


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
                    <div className="main">
                        <Steve/>
                    </div>
                </div>

            </div>
        );
    }
}

export default App;
