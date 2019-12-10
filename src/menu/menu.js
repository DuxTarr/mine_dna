import React, {Component} from 'react';
import './menu.scss';

import ReactDOM from 'react-dom';

class Menu extends Component {
    render() {
        return (
            <div className="menu">
                <div className="item top-list">Top list</div>
                <div className="item top-my-genome">My genome</div>
                <div className="item top-sand-box">Sand box</div>
            </div>
        );
    }
}

export default Menu;
